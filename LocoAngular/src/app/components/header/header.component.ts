import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userObject: any;
  private userSignInSubscription!: Subscription;
  private userRefreshSubscription!: Subscription;
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.userSignInSubscription = this.authService.getUserLoggedInObject().subscribe(
      user => this.userObject = user,
      );
      
      if(localStorage.getItem('refreshToken')) {
        this.userRefreshSubscription = this.authService.refreshUserAuthentication().subscribe();
      };
    }

  ngOnDestroy(): void {
    if(this.userSignInSubscription) this.userSignInSubscription.unsubscribe();

    if(this.userRefreshSubscription) this.userRefreshSubscription.unsubscribe();
  }

  public logout(): void {
    this.authService.logout().subscribe({
      next: () => {},
      error: () => {},
      complete: () => {
        this.router.navigate([""]);
      },
    })
  }

}
