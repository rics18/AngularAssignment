import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string;
  public user: User;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.email, this.password)
      .subscribe((response: any) => {
        console.log('Login Component', response);
        var id = response.idToken;
        this.router.navigate(['/tweeter', id]);
      }, (error: any) => {
        const err: Error = error.error;
        console.log('Login Component', err);
        this.errorMessage = 'Invalid login credentials';
      });
  }

}
