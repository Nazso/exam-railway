import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public signIn(form: NgForm): void {

    if(form.valid) {
      console.log(form.value);

      this.authService.login(form.value).subscribe({
        next: () => {},
        error: () => {},
        complete: () => {
          form.reset();
          this.router.navigate(["main"]);
        },
      })
    } else {
      alert('A bejelentkezéshez minden mezőt szíveskedjen kitölteni!');
    }
  }

}
