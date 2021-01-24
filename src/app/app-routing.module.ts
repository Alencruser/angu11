import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:  LoginComponent,
    data: {
      breadcrumb: 'login'
    }
  },
  {
    path:'register',
    component: LoginComponent,
    data : {
      breadcrumb:'register'
    }
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
