import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DieselModel } from '../../models/diesel.model';
import { DieselService } from '../../services/diesel.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

  public id?: any;
  public loco?: DieselModel;

  public subs?: Subscription;
  public locoSubs?: Subscription;

  
  constructor(private dieselService: DieselService, private router: Router, private ar: ActivatedRoute) {}
  
  public backToLocos() {
    this.router.navigate(['diesel'])
  }

  ngOnInit(): void {

    this.subs = this.ar.paramMap.subscribe(
      param => this.id = param.get('id')
    )
    console.log(this.id);

    this.locoSubs = this.dieselService.getOneDiesel(this.id).subscribe(
      (loco: DieselModel) => this.loco = loco
    )
    console.log(this.loco);
   
    // console.log(this.sizeForm.value)
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
    this.locoSubs?.unsubscribe()
  }
  
}
