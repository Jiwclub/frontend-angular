import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(public taskService: TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  createList(title: string) {
     this.taskService.createList(title).subscribe((list:List)=>{
      console.log(list)
      // ลิงค์ navigate to /lists/response._id

      // navigate เป็นการทำ router บน component
      this.router.navigate(['/lists',list._id])
    });
  }

  // createList(title: string) {
  //   this.taskService.createList(title).subscribe((list: List) => {
  //     console.log(list);
  //     // Now we navigate to /lists/task._id
  //     this.router.navigate([ '/lists', list._id ]); 
  //   });
  // }

  

}
