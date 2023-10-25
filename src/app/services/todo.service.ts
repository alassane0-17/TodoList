import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  serviceUrl: string;

  constructor(private http: HttpClient) { 
    this.serviceUrl = "http://localhost:3000/tasks";
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this  .serviceUrl, task);
  }

  getAllTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(this  .serviceUrl+'/'+task.id);
  }

  editTask(task: Task): Observable<Task>{
    return this.http.put<Task>(this  .serviceUrl+'/'+task.id, task);
  }

  getTask(id:number): Observable<Task>{
    return this.http.get<Task>(this  .serviceUrl+'/'+id);
  }
}
