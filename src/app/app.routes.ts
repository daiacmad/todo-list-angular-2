import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/todolist' to the todo list component
  {
    path: 'todo-app',
    component: TodoAppComponent,
  },
  {
    path: 'login',
    component: TodoLoginComponent,
  },
  {
    path: 'heroes',
    component: HeroContainerComponent,
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'validate-form',
    component: ValidateFormComponent,
  },
  // map '/' to '/todolist' as our default route
  {
    path: '',
    redirectTo: 'todo-app',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);