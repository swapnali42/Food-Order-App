import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { HomeComponent } from './component/home/home.component'
import { CartComponent } from './component/cart/cart.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'search',
    component: SearchComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
