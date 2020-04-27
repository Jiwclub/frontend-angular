import { Injectable } from '@angular/core';
import { WebRequstService } from './web-requst.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
// WebRequstService เป็นของ calss web-requst
  constructor(private webReqService:WebRequstService) { }

  
  getLists() {
    return this.webReqService.get('lists');
  }
  
  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }
  
  getTasks(listId:string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  createTasks(title: string, listId: string) {
          // We want to send a web request to create a Task
       return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }
}
