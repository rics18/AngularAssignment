import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {Router} from '@angular/router';
import {TweetDetails} from './tweetDetails';

@Injectable()
export class LoginService {

  tweetId: string;
  tweetDetails: TweetDetails[];

  constructor(private http: HttpClient,
              private router: Router) { }

  public login(username: string, password: string): Observable<any> {

    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g';
    const loginObject = new User();
    loginObject.email = username;
    loginObject.password = password;
    loginObject.returnSecureToken = true;
    return this.http.post(url, loginObject);
  }

  public getTweeterDetails(idToken: string): Observable<any> {
    const url = 'https://angular-sample-twitter.firebaseio.com/tweets.json?auth=' + idToken;
    return this.http.get(url);
  }
}
