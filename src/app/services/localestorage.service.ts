import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class LocalestorageService {

  messageService = inject(MessageService)
  load (param: string): Response {
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
        data: []
      }
    }
    
  }

  save<K, T>(param: string, newValue: T): Response {
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
        data: null
      }
    }
  }

  update<T extends { id: number }>(param: string, updatedValue: T, silentUpdate: boolean = false): Response {
    try {
      const elements = this.load(param).data
      if (Array.isArray(elements)) {
        const updatedElements = elements.map(el => el.id === updatedValue.id ? updatedValue : el)
        localStorage.setItem(param, JSON.stringify(updatedElements));
      }
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
        data: null
      }
    }
  }

  delete (param: string, id: number): Response {
    try {
      const elements = this.load(param).data

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
        data: null
      }
    }
  }

  getById (from:string, param: string, id: number | null): Response {
    try {
      const elements = this.load(from).data
      if (!id) {
        const lastSelected = localStorage.getItem(param);
        if (lastSelected && lastSelected!== '' && this.isValidId(from, Number(lastSelected))) {
          localStorage.setItem(param, lastSelected);
        } else {
          localStorage.setItem(param, '');
        }
      } else {
        if (this.isValidId(from, id)) {
          localStorage.setItem(param, id.toString());
        } else {
          localStorage.setItem(param, '');
        }
      }
      
      if (Array.isArray(elements)) {
        return {
          status: 200,
          data: elements.find(el => el.id === Number(localStorage.getItem(param)))
        }
      }
      return {
          status: 200,
          data: null
        }
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 404,
        data: null
      }
    }
    
  }

  isValidId (from: string, id: number) {
      if (!id) return false
      const response: Response = this.load(from)
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

  getBy (from: string, param: string, value: string): Response {
    try {
      const elements = this.load(from).data
      let results = []
      if (Array.isArray(elements)) {
        results = elements.filter(el =>
          typeof el[param] === 'string' && el[param].toLowerCase().includes(value.toLowerCase())
        );
      }
      return {
        status: 200,
        data: results
      }
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 404,
        data: []
      }
    }
  }
}

type Response = {
  status: number,
  data: any
}