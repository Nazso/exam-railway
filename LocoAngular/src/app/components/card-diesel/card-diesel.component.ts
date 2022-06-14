import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DieselModel } from '../../models/diesel.model';
import { DieselService } from '../../services/diesel.service';

@Component({
  selector: 'app-card-diesel',
  templateUrl: './card-diesel.component.html',
  styleUrls: ['./card-diesel.component.scss']
})
export class CardDieselComponent implements OnInit {

  public locos: DieselModel[] = [];

  constructor(private dieselService: DieselService, private router: Router) {}

  ngOnInit(): void {
    
    this.dieselService.getDiesel().subscribe({
      next: (locos: DieselModel[]) => {
        this.locos = locos
        console.log(this.locos);
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Loc request is done!')}
    })
  }
  
  public goToDetails(loco: DieselModel): void {
        this.router.navigateByUrl(`diesel/${loco._id}`);
  }

}
