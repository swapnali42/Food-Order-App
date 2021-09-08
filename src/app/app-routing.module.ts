import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './component/login-page/login-page.component';



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
    loadChildren: () => import('src/app/component/register-user/register-user.module').then(m => m.RegisterUserModule)
  },

  {
    path: 'home',
   loadChildren: () => import('src/app/component/home/home.module').then(m => m.HomeModule),
   canActivate: [AuthGuard]
  },

  {
    path: 'cart',
    loadChildren: () => import('src/app/component/cart/cart.module').then(m => m.CartModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about-us',
    loadChildren: () => import('src/app/component/about-us/about-us.module').then(m => m.AboutUsModule ),
   
  },
  {
    path: 'faq',
   loadChildren: () => import('src/app/component/faq/faq.module').then(m => m.FaqModule),
  
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
