import { Component, NgModule, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private formbuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
     // stop here if form is invalid
    if(this.loginForm.invalid){
    return;
    //validate fields
    }
  }
}
