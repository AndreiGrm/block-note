import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class LocalestorageService {

  messageService = inject(MessageService)
  load <T>(param: string): Response<T[]> | ResponseError {
    try {
      let notesJson = localStorage.getItem(param);
      if (!notesJson) {
        localStorage.setItem(param, '[]')
        return {
          status: 200,
          data: []
        }
      }
      const notesParsed: T[] = JSON.parse(notesJson);
      
       return {
        status: 200,
        data: notesParsed
      }
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while loading record' });
      return {
        status: 404,
        message: 'Error while loading record'
      }
    }
    
  }

  save<T>(param: string, newValue: T): Response<T> | ResponseError {
    try {
      const response = this.load<T>(param);

      if (this.isResponseError(response)) {
        throw new Error();
      }

      const elements = response.data;

      elements.push(newValue)
      localStorage.setItem(param, JSON.stringify(elements));
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record added' });
      return {
        status: 200,
        data: newValue
      }
    } catch (error) {
      console.error("Error:", error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while adding record' });
      return {
        status: 404,
        message: 'Error while adding record'
      }
    }
  }

  update<T extends { id: number }>(param: string, updatedValue: T, silentUpdate: boolean = false): Response<T> | ResponseError {
    try {
      const response = this.load<T>(param);

      if (this.isResponseError(response)) {
        throw new Error();
      }

      const elements = response.data;


      const updatedElements = elements.map(el => el.id === updatedValue.id ? updatedValue : el)
      localStorage.setItem(param, JSON.stringify(updatedElements));


      if (!silentUpdate){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record sucesfully updated' });
      }
      return {
        status: 200,
        data: updatedValue
      }
    } catch (error) {
      console.error("Error:", error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while updating record' });
      return {
        status: 404,
        message: 'Error while updating record'
      }
    }
  }

  delete <T extends { id: number }>(param: string, id: number): Response<null> | ResponseError {
    try {
      const response = this.load<T>(param);

      if (this.isResponseError(response)) {
        throw new Error();
      }

      const elements = response.data;


      if (Array.isArray(elements)) {
        localStorage.setItem(param, JSON.stringify(elements.filter(el => el.id !== id)));
      }
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record sucesfully deleted' });
      return {
        status: 200,
        data: null
      }
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while deleting record' });
      return {
        status: 404,
         message: 'Error while deleting record'
      }
    }
  }

  getById <T extends { id: number }>(from:string, param: string, id: number | null): Response<T | undefined> | ResponseError{
    try {
      const response = this.load<T>(from);

      if (this.isResponseError(response)) {
        throw new Error();
      }
      
      const elements = response.data;
      
      if (!id) {
        const lastSelected = localStorage.getItem(param);
        if (lastSelected && lastSelected!== '' && this.isValidId<T>(from, Number(lastSelected))) {
          localStorage.setItem(param, lastSelected);
        } else {
          localStorage.setItem(param, '');
        }
      } else {
        if (this.isValidId<T>(from, id)) {
          localStorage.setItem(param, id.toString());
        } else {
          localStorage.setItem(param, '');
        }
      }
      const element = elements.find(el => el.id === Number(localStorage.getItem(param)))


      return {
        status: 200,
        data: element
      }

    } catch (error) {
      console.error("Error:", error);
      return {
        status: 404,
        message: 'Error while loading record'
      }
    }
    
  }

  isResponseError(obj: any): obj is ResponseError {
    return obj && typeof obj.error === 'string';
  }

  isValidId <T extends { id: number }>(from: string, id: number) {
      if (!id) return false
      const response = this.load<T>(from);

      if (this.isResponseError(response)) {
        throw new Error();
      }

      const elements = response.data;

      if (Array.isArray(response.data)) {
        const valid = elements.find(r => r.id === id);
        if (valid && valid.id) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }

  }

  getBy <T  extends Record<string, any>>(from: string, param: string, value: string): Response<T[]> | ResponseError {
    try {
      const response = this.load<T>(from);

      if (this.isResponseError(response)) {
        throw new Error();
      }

      const elements = response.data;


      const results = elements.filter(el =>
        typeof el[param] === 'string' && el[param].toLowerCase().includes(value.toLowerCase())
      );

      return {
        status: 200,
        data: results
      }
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 404,
        message: 'Error while loading record'
      }
    }
  }
}

type Response<T> = {
  status: number,
  data: T
}

type ResponseError = {
  status: number,
  message: string 
}
