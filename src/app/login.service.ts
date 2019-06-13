import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {Router} from '@angular/router';
import {TweetDetails} from './tweetDetails';
import {UrlConstants} from './urlConstants';

@Injectable()
export class LoginService {

  tweetId: string;
  tweetDetails: TweetDetails[];

  constructor(private http: HttpClient,
              private router: Router) { }

  public login(username: string, password: string): Observable<any> {

    const url = UrlConstants.GOOGLE_API;
    const loginObject = new User();
    loginObject.email = username;
    loginObject.password = password;
    loginObject.returnSecureToken = true;
    return this.http.post(url, loginObject);
  }

  public getTweeterDetails(idToken: string): Observable<any> {
    const url = UrlConstants.TWEETER_API + idToken;
    return this.http.get(url);
  }

  public logout() {
    console.log('logout');
    this.router.navigate(['/login']);
  }
}
