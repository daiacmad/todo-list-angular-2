import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response , Headers } from '@angular/http';
import { Todo } from './todo';
import { Hero } from "./hero";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  //----------------------todo
  public getAllTodos(): Observable<Todo[]> {
    // return Observable
    //   .interval(5000)
    //   .startWith(0)
    //   .flatMap(() => {
    //     return this.http
    //       .get(API_URL + '/api/getTodoList')
    //       .map(response => {
    //         const todos = response.json();
    //         return todos.map((todo) => new Todo(todo));
    //       })
    //       .catch(this.handleError);
    //   })
    return this.http
      .get(API_URL + '/api/getTodoList')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/api/addTodoItem', todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/api/updateTodoItem/' + todo._id, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/api/deleteTodoItem/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }


  //------------------------login
  public postLogin(user): Observable<any>{
    return this.http
      .post("http://edj.acc-svrs.com/cms/api/members/postLogin", user)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getLogout(token : string): Observable<any>{
    let headers = new Headers();
     headers.append('Authorization', "Bearer " + token); 

    return this.http
      .get("http://edj.acc-svrs.com/cms/api/members/getLogout",{
        headers: headers
      })
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  // --------------------------hero
  public getAllHeroes(): Observable<Hero[]> {
    return this.http
      .get(API_URL + '/api/getHeroes')
      .map(response => {
        const heroes = response.json();
        return heroes.map((heroes) => new Hero(heroes));
      })
      .catch(this.handleError);
  }
  public getHeroDetail(id : string): Observable<Hero> {
    return this.http
      .get(API_URL + '/api/getHeroDetail/' + id)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }
  






  //-------------------------error handle 
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}