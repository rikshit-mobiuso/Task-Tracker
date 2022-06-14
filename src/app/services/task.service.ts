import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Task } from '../Task';
declare var require: any
const axios = require('axios').default;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private apiUrl = 'http://localhost:5000/tasks';
  // private apiUrl = "https://628dd438a339dfef87a11484.mockapi.io/api/v1/task"
  private apiUrl = "https://5eccbfeb44637c0016d8d9e0.mockapi.io/api/v1/task"


  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get<Task[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url).pipe(catchError(this.handleError));
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions).pipe(catchError(this.handleError));
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(catchError(this.handleError));
  }
  
  handleError(err: any) {
    if(err instanceof HttpErrorResponse){
      console.log(err)
    }
    else{
      console.log(err)
    }
    return throwError(err);
  }
}