import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  register:any = FormGroup;
  constructor(private fb:FormBuilder, private router :Router, private commnServ:CommonService) { }

  ngOnInit(): void {
    this.register = this.fb.group ({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      pass : ['', Validators.required]
    })
  }

  registerSubmit(data:any) 
  {
    console.log(data);
    let dataToPass = {
      email:data.email,
      pass:data.pass
    }
    this.commnServ.addUser(dataToPass).subscribe((data:any) => {
      console.log(data);
    })
  }
  goToLogin(){
    this.router.navigate(['login']);
    
  }

}
 