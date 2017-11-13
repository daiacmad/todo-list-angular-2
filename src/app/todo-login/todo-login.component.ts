import { Component, OnInit , Output ,EventEmitter , Input } from '@angular/core';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.css'],
  providers :[TodoDataService]
})
export class TodoLoginComponent implements OnInit {

	user : any = {
		email : "" ,
		password : ""
	}
  loading: boolean = false;

  constructor(private todoDataService: TodoDataService) { 
  }

  ngOnInit() {
  }

  postLogin(){
    this.loading = true;
    this.todoDataService
      .loginUser(this.user)
      .subscribe(
        (response) => {
          if(response.data){
            localStorage.setItem("token", response.data.token);
          }
          console.log(response);
          this.loading = false;
        }
      );
  }

  getLogout(){
   this.loading = true;
    this.todoDataService
      .logoutUser(localStorage.getItem("token"))
      .subscribe(
        (response) => {
          if(response.data){
            console.log(response.data.message);
            localStorage.removeItem("token");
          }else{
            console.log(response.error.description);
          }
          this.loading = false;
        }
       )
  }
}
