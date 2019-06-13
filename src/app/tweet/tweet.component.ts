import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {TweetDetails} from '../tweetDetails';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  idToken: string;
  errorMessage: string;
  public tweetDetails: TweetDetails[];

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idToken = params.get('id');
      console.log(this.idToken);
    })

    this.getTweetDetails();
  }

  public getTweetDetails() {
    this.loginService.getTweeterDetails(this.idToken)
      .subscribe((response: TweetDetails[]) => {
        this.tweetDetails = response;
        this.loginService.tweetDetails = this.tweetDetails;
      }, (error: any) => {
        const err: Error = error.error;
        console.log('Tweeter Component', err);
        this.errorMessage = 'Invalid credentials';
      });
  }
  public getDetails(tweetId: string) {
    this.loginService.tweetId = tweetId;
    this.router.navigate(['/tweeterdetails']);
  }

  public logout() {
    this.loginService.logout();
  }

}
