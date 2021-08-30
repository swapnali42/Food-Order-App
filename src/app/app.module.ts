import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { HomeComponent } from './component/home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button';
import { CartComponent } from './component/cart/cart.component';
import { SearchComponent } from './component/search/search.component';


 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    RegisterUserComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
