import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../../models/comment-model';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {

  @Input() public commentDetails?: Comment;
  @Output() public closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitCloseModal(): void {
    this.closeModal.emit();
  }

}
