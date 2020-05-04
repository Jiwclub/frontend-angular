import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

 // ActivatedRoute คือการถอด params ในลิงค์

 lists: List[];
 tasks: Task[];
  constructor(private taskService: TaskService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params ) => {
        if(params.listId){

          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = undefined;
        }
      }
    )
    this.taskService.getLists().subscribe((lists: List[])=>{
      // ดึงข้อมูลใน database lists
    this.lists = lists
    })
  }

  onTaskClick(task: Task){
    //  we want to set the task to completed
    this.taskService.complete(task).subscribe(()=>{
      //  the task has been to completed
      console.log("complete successully !")
      task.completed = !task.completed;
    })
  }

  
}
