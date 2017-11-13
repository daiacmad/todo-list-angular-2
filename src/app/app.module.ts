import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { ApiService } from './api.service';
import {TodoDataService} from './todo-data.service';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { routing } from './app.routes';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoLoginComponent,
    TodoAppComponent,
    HeroContainerComponent,
    HeroListComponent,
    HeroDetailComponent,
    ValidateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ApiService , TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
