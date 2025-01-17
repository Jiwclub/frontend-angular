import { Injectable } from '@angular/core';
import { WebRequstService } from './web-requst.service';
import { Task } from '../models/task.model';


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

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed: !task.completed
    })
  }
}
