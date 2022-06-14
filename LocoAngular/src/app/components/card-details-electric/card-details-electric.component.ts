import { Component, OnInit, OnDestroy } from '@angular/core';
import { DieselModel } from 'src/app/models/diesel.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectricService } from '../../services/electric.service';
import { ElectricModel } from '../../models/electric.model';

@Component({
  selector: 'app-card-details-electric',
  templateUrl: './card-details-electric.component.html',
  styleUrls: ['./card-details-electric.component.scss']
})
export class CardDetailsElectricComponent implements OnInit, OnDestroy {

  public id?: any;
  public loco?: ElectricModel;

  public subs?: Subscription;
  public locoSubs?: Subscription;

  constructor(private router: Router, private ar: ActivatedRoute, private electricService: ElectricService) { }

  public backToLocos() {
    this.router.navigate(['electric'])
  }

  ngOnInit(): void {
    this.subs = this.ar.paramMap.subscribe(
      param => this.id = param.get('id')
    )
    console.log(this.id);

    this.locoSubs = this.electricService.getOneElectric(this.id).subscribe(
      (loco: ElectricModel) => this.loco = loco
    )
    console.log(this.loco);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
    this.locoSubs?.unsubscribe()
  }

}