import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BuyItemService } from '../../services/buy-item.service';
import { CommentService } from '../../services/comment.service';
import { User } from 'src/app/models/user.model';
import { BuyItem } from 'src/app/models/buyItem.model';
import { Comment } from 'src/app/models/comment-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public userListVisible: boolean = false;
  public buyItemListVisible: boolean = false;
  public commentListVisible: boolean = false;

  public users: User[] = [];
  public items: BuyItem[] = [];
  public comments: Comment[] = [];

  constructor(
    private userService: UserService,
    private buyItemService: BuyItemService,
    private commentService: CommentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('User request is done!')}
    })

    this.buyItemService.getItems().subscribe({
      next: (items: BuyItem[]) => {
        this.items = items
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Item request is done!')}
    })
    
    this.commentService.getComment().subscribe({
      next: (comments: Comment[]) => {
        this.comments = comments;
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Item request is done!')}
    })
  }

  public userListVisibility() {
    this.userListVisible = true;
    this.buyItemListVisible = false;
    this.commentListVisible = false;
  }

  public buyItemListVisibility(): void {
    this.userListVisible = false;
    this.buyItemListVisible = true;
    this.commentListVisible = false;
  }

  public commentListVisibility(): void {
    this.userListVisible = false;
    this.buyItemListVisible = false;
    this.commentListVisible = true;
  }

  public allListVisibility() {
    this.userListVisible = true;
    this.buyItemListVisible = true;
    this.commentListVisible = true;
  }

  public deleteComment(id: string) {
    this.commentService.deleteOneComment(id).subscribe({
      next: (data) => {console.log(data)},
      error: (e) => {console.log(e)},
      complete: () => {
        console.log(`Comment deleted with: ${id}`
        )}
    })
  }

  public deleteOneUser(id: string) {
    this.userService.deleteOneUser(id).subscribe({
      next: (data) => {console.log(data)},
      error: (e) => {console.log(e)},
      complete: () => {console.log(`User deleted with: ${id}`)}
    })
  }


}
