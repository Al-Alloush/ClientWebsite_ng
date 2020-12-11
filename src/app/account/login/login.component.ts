import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // create Reavtive angular FormGroup
  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    
    // construct our form inside our component.
    // create FormControlls
    this.loginForm = new FormGroup({
      userNameOrEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
