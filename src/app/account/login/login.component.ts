import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // create Reavtive angular FormGroup
  loginForm!: FormGroup;

  constructor(private accountService: AccountService) { }

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
    this.accountService.login(this.loginForm.value).subscribe(()=>{
      console.log('User log in');
    }, error =>{
      console.log('Error');
    });

  }

}
