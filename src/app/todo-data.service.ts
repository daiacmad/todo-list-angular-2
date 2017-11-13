import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class TodoDataService {
  
  constructor(private api: ApiService) {
  }
 
  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }
 
  // Simulate DELETE /todos/:id
  deleteTodoById(id: number){
    return this.api.deleteTodoById(id);
  }
 
  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    // return this.todos;
    return this.api.getAllTodos();
  }
 
 
  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

  //login user
  loginUser(user: any){
    return this.api.postLogin(user);
  }
  logoutUser(token: string){
    return this.api.getLogout(token);
  }
}
