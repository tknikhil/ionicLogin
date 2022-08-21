import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authenticationService: AuthServiceService,
    public router: Router
  ) {}

  ngOnInit() {}

  signIn(email, password) {
    this.authenticationService
      .SignIn(email.value, password.value)
      .then((res) => {
        if (this.authenticationService.isEmailVerified) {
          this.router.navigate(['dashboard']);
        } else {
          window.alert('Email is not varified!');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
