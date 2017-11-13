import { Component, OnInit ,  OnDestroy} from '@angular/core';
import { Todo } from "../todo";
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers :[TodoDataService]
})
export class TodoAppComponent implements OnInit {

	newTodo : Todo = new Todo();
  todos: Todo[] = [];
  observibleGetAllTodo: any = "";

  constructor(private todoDataService: TodoDataService){}

  public ngOnInit(){

    this.observibleGetAllTodo = this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  public ngOnDestroy(){
     this.observibleGetAllTodo.unsubscribe();
  }


 	onAddTodo( todo : Todo ){
     this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
 	}

 	onRemoveTodo(todo: Todo) {
     this.todoDataService
      .deleteTodoById(todo._id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t._id !== todo._id);
        }
      );
	}

	onToggleCompleteTodo(todo: Todo){
		this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updateTodo) => {
          todo = updateTodo;
        }
      );
	}
}
