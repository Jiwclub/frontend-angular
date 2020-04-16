import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  createList(title: string) {
    return this.taskService.createList(title).subscribe((response:any)=>{
      console.log(response)
      // ลิงค์ navigate to /lists/response._id
    })
  }

}
