import { Component ,Input , Output , EventEmitter} from '@angular/core';
import { Todo } from "../todo";
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {

  }


  @Input() todos: Todo[];
  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() toogleTodoComplete: EventEmitter<Todo> = new EventEmitter();

	toggleComplete(todo : Todo){
		this.toogleTodoComplete.emit(todo);
	}

	removeTodo(todo: Todo){
		this.remove.emit(todo);
	}

}
