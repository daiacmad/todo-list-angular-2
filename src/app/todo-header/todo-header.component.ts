import { Component , Output , EventEmitter} from '@angular/core';
import { Todo } from "../todo";
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
  providers : [TodoDataService]
})
export class TodoHeaderComponent {

  constructor(private todoDataService: TodoDataService) { }

  newTodo: Todo = new Todo();

  @Output() add : EventEmitter<Todo> = new EventEmitter();

  addTodo(){
  	if(this.newTodo.title){
  		this.add.emit(this.newTodo);
		this.newTodo = new Todo();
  	}
  }
}
