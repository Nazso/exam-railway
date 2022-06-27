import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectricModel } from '../../models/electric.model';
import { ElectricService } from '../../services/electric.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public locos: ElectricModel[] = [];

  constructor(private electricService: ElectricService, private router: Router) { }

  ngOnInit(): void {
    this.electricService.getElectric().subscribe({
      next: (locos: ElectricModel[]) => {
        this.locos = locos
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Loc request is done!')}
    })
  }

  public goToDetails(loco: ElectricModel): void {
    this.router.navigateByUrl(`electric/${loco._id}`);
  }

}
