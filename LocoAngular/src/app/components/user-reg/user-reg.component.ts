import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {

  private saveUserSubscription!: Subscription;

  public userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public saveUser(): void {
    console.log(this.userForm.value);
    const observable = this.userService.saveUser(this.userForm.value);
    this.saveUserSubscription = observable.subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {
        this.userForm.reset();
        this.router.navigate(["/"]);
      },
    })

  }

  ngOnDestroy() {
    if(this.saveUserSubscription){
      this.saveUserSubscription.unsubscribe();
    }
  }

}
