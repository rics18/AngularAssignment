import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TweetComponent} from './tweet/tweet.component';
import {TweetsDetailsComponent} from './tweets-details/tweets-details.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'tweeter/:id',
        component: TweetComponent
    },
  {
    path: 'tweeterdetails',
    component: TweetsDetailsComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}
