import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

 // ActivatedRoute คือการถอด params ในลิงค์

 lists: any;
 tasks: any;
  constructor(private taskService: TaskService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params ) => {
        console.log(params)
        this.taskService.getTasks(params.listId).subscribe((tasks: any[]) => {
          this.tasks = tasks;
        })
      }
    )
    this.taskService.getLists().subscribe((lists:any[])=>{
      // ดึงข้อมูลใน database lists
    this.lists = lists
    })
  }

  
}
