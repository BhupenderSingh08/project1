import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup , Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:any = FormGroup;

  constructor(private authservice: AuthService,private fb: FormBuilder , private router:Router,private api:ApiService) { 

    this.loginForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  onLogin(){
    this.api.getData()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.userName && a.pswd === this.loginForm.value.password
      });
      if(user){
        alert("login successfully");
        this.loginForm.reset();
        this.router.navigate(['nav'])
      }else{
        alert("user not found");
      }
      err=>{
        alert("something went wrong");
      }
    })
   
  }

}
