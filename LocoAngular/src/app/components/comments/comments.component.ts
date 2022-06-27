import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import { DieselService } from '../../services/diesel.service';
import { ElectricService } from '../../services/electric.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';;
import { DieselModel } from '../../models/diesel.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  public id: any;
  private userSignInSubscription?: Subscription;
  public uObject: any;
  public dataC?: DieselModel;
  // public username?: string = this.uObject?.username;

  private saveCommentSubscription?: Subscription;

  public commentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    usercomment: new FormControl('', [Validators.required])
  });

  constructor(
    private commentService: CommentService,
    private dieselService: DieselService,
    private electricService: ElectricService,
    private authService: AuthService,
    private ar: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userSignInSubscription = this.authService.getUserLoggedInObject().subscribe(
      user => this.uObject = user
      )

    this.ar.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id')
      },
      error: (err) => {console.error(err)},
      complete: () => {}
    })

    this.dieselService.getOneDiesel(this.id).subscribe({
      next: (data) => {
        this.commentForm.patchValue(data)
        this.dataC = data
      },
      error: (err) => {console.error(err)},
      complete: () => {},
    })

    this.electricService.getOneElectric(this.id).subscribe({
      next: (data) => {
        this.commentForm.patchValue(data)
      },
      error: (err) => {console.error(err)},
      complete: () => {},
    })
  }

  ngOnDestroy(): void {
    if(this.userSignInSubscription) this.userSignInSubscription?.unsubscribe()
  }

  public saveComment() {
    const observable = this.commentService.saveComment(this.commentForm.value);
    this.saveCommentSubscription = observable.subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {
        this.commentForm.reset()
        if (this.dataC) {
          this.router.navigate(['diesel/' + this.id]);

        } else {
          this.router.navigate(['electric/' + this.id]);

        }
      },
    })
  }

  public cancelComment() {
    this.commentForm.reset();
    this.router.navigate(['main']);
  }

}
