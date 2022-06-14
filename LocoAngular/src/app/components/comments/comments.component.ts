import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  private saveCommentSubscription?: Subscription;

  public commentForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    date: new FormControl(''),
    engine: new FormControl(''),
    type: new FormControl(''),
    usercomment: new FormControl('')
  });

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  public saveComment() {
    console.log(this.commentForm.value);
    // this.commentService.saveComment(this.commentForm.value).subscribe(
    //   (data) => console.log(data)
    // )
    const observable = this.commentService.saveComment(this.commentForm.value);
    this.saveCommentSubscription = observable.subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {
        this.commentForm.reset();
      },
    })
    // this.commentForm.reset();
  }

  public cancelComment() {
  
    this.commentForm.reset();
  }

}
