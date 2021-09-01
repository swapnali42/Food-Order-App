import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
login:any = FormGroup;
users : any = [];
    constructor(private fb:FormBuilder, private router :Router, private commserv:CommonService) { }

  ngOnInit(): void {
    this.login = this.fb.group ({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      pass:['',Validators.required]
    })
    this.commserv.getUser().subscribe((data:any)=> {
      console.log(data);
      this.users = data;
      console.log("this.users",this.users);
    })
  }
  

  loginSubmit(data:any) {
   
    if(data.email) {
      
      this.users.forEach((item:any) => {
        if(item.email === data.email && item.pass === data.pass)
        {
         console.log("valid");
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigate(['home']);
        }
        else{
          console.log("invalid")
          localStorage.clear()
          
        }
       
      });
    }
  }

  goToSignup() {
  this.router.navigate(['register']);
  }
}
