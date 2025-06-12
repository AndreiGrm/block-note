import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class LocalestorageService {

  messageService = inject(MessageService)
  load <T>(param: string): ResponseDue<T[]> | ResponseError {
    try {
      let notesJson = localStorage.getItem(param);
      if (!notesJson) {
        localStorage.setItem(param, '[]')
        return {
          status: 200,
          data: []
        }
      }
      const notesParsed = JSON.parse(notesJson);
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

  save<K, T>(param: string, newValue: T): Response | ResponseError {
    try {
      const elements = this.load(param).data
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

  update<T extends { id: number }>(param: string, updatedValue: T, silentUpdate: boolean = false): ResponseDue<T> | ResponseError {
    try {
      const response = this.load<T>(param)
      if (response as  ResponseError) throw new Error();

        const elements = response.data
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

  delete <T extends { id: number }>(param: string, id: number): ResponseDue<null> | ResponseError {
    try {
      const elements = this.load<T>(param).data

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

  getById <T extends { id: number }>(from:string, param: string, id: number | null): ResponseDue<T> {
    try {
      const elements = this.load<T>(from).data
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
      

      return {
        status: 200,
        data: elements.find(el => el.id === Number(localStorage.getItem(param)))
      }

    } catch (error) {
      console.error("Error:", error);
      return {
        status: 404,
        data: 
      }
    }
    
  }

  isValidId <T>(from: string, id: number) {
      if (!id) return false
      const response: Response = this.load<T>(from)
      if (Array.isArray(response.data)) {
        const valid = response.data.find(r => r.id === id);
        if (valid && valid.id) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }

  }

  // getBy (from: string, param: string, value: string): Response {
  //   try {
  //     const elements = this.load(from).data
  //     let results = []
  //     if (Array.isArray(elements)) {
  //       results = elements.filter(el =>
  //         typeof el[param] === 'string' && el[param].toLowerCase().includes(value.toLowerCase())
  //       );
  //     }
  //     return {
  //       status: 200,
  //       data: results
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     return {
  //       status: 404,
  //       data: []
  //     }
  //   }
  // }
}

type Response = {
  status: number,
  data: any
}

type ResponseDue<T> = {
  status: number,
  data: T
}

type ResponseError = {
  status: number,
  message: string 
}
