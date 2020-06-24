import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../user';
import { AuthService } from '../auth.service';
import { LoadingIndicatorService } from '../../services/loading-indicator.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User[] = [];
 loginForm = this.loginFormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginFormBuilder: FormBuilder,
    private loadingIndicatorService: LoadingIndicatorService
    ) { }

  ngOnInit(): void {
  
  }
onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.doLogin();
}

doLogin() {
    this.authService.login(this.loginForm.value).subscribe(user => {
         this.loadingIndicatorService.hide();
         this.user  = user;
         console.log(this.user.length > 0)
         if (this.user.length > 0) {
           localStorage.setItem('username', this.user[0].firstName);
           localStorage.setItem('userId', this.user[0].id.toString());
           localStorage.setItem('userType', this.user[0].type);
           const redirectUrl = '/admin';

          this.router.navigate([redirectUrl]);
         }
    });
}

}
