import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      guest: ['', Validators.required]
    });
  }

  get formControls(){
    return this.authForm.controls;
  }

  signIn(){
    this.isSubmitted = true;
    if (this.authForm.invalid){ return ; }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/admin');
  }
}
