import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DieselModel } from '../../models/diesel.model';
import { DieselService } from '../../services/diesel.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment-model';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

  public id?: any;
  public loco?: DieselModel;

  public locoType?: string = this.loco?.type;

  public subs?: Subscription;
  public locoSubs?: Subscription;
  public comments: Comment[] = [];
  public detailedComment?: Comment;
  public commentDetailsIsVisible: boolean = false;
  
  constructor(
    private dieselService: DieselService,
    private router: Router,
    private ar: ActivatedRoute,
    private commentService: CommentService
    ) {}
  
  public backToLocos() {
    this.router.navigate(['diesel'])
  }

  ngOnInit(): void {

    this.subs = this.ar.paramMap.subscribe(
      param => this.id = param.get('id')
    )

    this.locoSubs = this.dieselService.getOneDiesel(this.id).subscribe(
      (loco: DieselModel) => this.loco = loco
    )

    this.commentService.getComment().subscribe({
      next: (comments: Comment[]) => {
        this.comments = comments
      },
      error: (err) => {console.log(err)},
      complete: () => {}
    })
   
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
    this.locoSubs?.unsubscribe()
  }

  public navigateToComment(id: any) {
    this.router.navigate(['comments/' + id])
  }

  public openModal(comment: Comment) {
    this.detailedComment = comment;
    this.commentDetailsIsVisible = true;
    console.log(comment);
  }

  public closeModal(): void {
    this.commentDetailsIsVisible = false;
  }
  
}
