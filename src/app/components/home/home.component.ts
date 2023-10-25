import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  task: Task = new Task();
  taskArray : Task[] = [];
  addTaskValue : string = '';
  editTaskValue: string = '';

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.task = new Task();
    this.getAllTask();
    this.taskArray = [];
    this.addTaskValue = '';
    this.editTaskValue = '';
  }

  getAllTask(){
    this.todoService.getAllTask().subscribe(res => {
      this.taskArray = res;
    },err =>{
        alert('Unable to get All task')
    })
  }

  editTask(){
    this.todoService.editTask(this.task).subscribe( res => {
      this.ngOnInit();
    }, err => {
      alert("Failed To update Task")
    })
  }

  deleteTask(){
    this.todoService.deleteTask(this.task).subscribe( res => {
      this.ngOnInit();
    }, err => {
      alert("Failed To delete Task")
    })
  }

  addTask(){
    this.task.name = this.addTaskValue;
    this.todoService.addTask(this.task).subscribe(res => {
        this.ngOnInit();
        this.addTaskValue = '';
    },err =>{
      alert('Failed to add task');
    });
  }

  filterTasksByStatus(status: 'pending' | 'complete') {
    return this.taskArray.filter(task => task.status === status);
  }

}
