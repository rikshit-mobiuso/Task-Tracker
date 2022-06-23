import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, from, Observable, of, throwError } from 'rxjs';
import { Task } from '../Task';
declare var require: any
const axios = require('axios').default;
// import axios from 'axios';

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
  private apiUrl2 = "https://628dd438a339dfef87a11484.mockapi.io/api/v1/task"
  private apiUrl = "https://5eccbfeb44637c0016d8d9e0.mockapi.io/api/v1/task"


  constructor(private http: HttpClient) {}

  //using HttpClient 

  // getTasks() {
  //   return this.http.get<Task[]>(this.apiUrl).pipe(catchError(this.handleError));
  // }

  // deleteTask(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.delete<Task>(url).pipe(catchError(this.handleError));
  // }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions).pipe(catchError(this.handleError));
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(catchError(this.handleError))
  // }

 
  //using Axios

  getTasks(): Observable<any> {
    return from(axios.get(this.apiUrl)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    }))
    
  }

  addTask(task: Task): Observable<Task> {
    return axios({
      method: 'post',
      url: this.apiUrl,
      data: task
    });
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return axios({
      method: 'put',
      url: url,
      data: task
    });
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return axios({
      method: 'delete',
      url: url,
      data: task
    });
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