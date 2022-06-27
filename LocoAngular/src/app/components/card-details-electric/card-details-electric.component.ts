import { Component, OnInit, OnDestroy } from '@angular/core';
import { DieselModel } from 'src/app/models/diesel.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectricService } from '../../services/electric.service';
import { ElectricModel } from '../../models/electric.model';
import { CommentService } from '../../services/comment.service';
import { Comment } from 'src/app/models/comment-model';

@Component({
  selector: 'app-card-details-electric',
  templateUrl: './card-details-electric.component.html',
  styleUrls: ['./card-details-electric.component.scss']
})
export class CardDetailsElectricComponent implements OnInit, OnDestroy {

  public id?: any;
  public loco?: ElectricModel;
  public comments: Comment[] = [];
  public detailedComment?: Comment;
  public commentDetailsIsVisible: boolean = false;

  public subs?: Subscription;
  public locoSubs?: Subscription;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private electricService: ElectricService,
    private commentService: CommentService
    ) { }

  public backToLocos() {
    this.router.navigate(['electric'])
  }

  ngOnInit(): void {
    this.subs = this.ar.paramMap.subscribe(
      param => this.id = param.get('id')
    )

    this.locoSubs = this.electricService.getOneElectric(this.id).subscribe(
      (loco: ElectricModel) => this.loco = loco
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
    this.router.navigate(['/comments/' + id])
  }

  public openModal(comment: Comment) {
    this.detailedComment = comment;
    this.commentDetailsIsVisible = true;
  }

  public closeModal(): void {
    this.commentDetailsIsVisible = false;
  }

}
