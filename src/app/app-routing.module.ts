import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';

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
    path:'create',
    component:ArticlesComponent,
    canActivate: [AuthenticationService.isConnected()]
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
