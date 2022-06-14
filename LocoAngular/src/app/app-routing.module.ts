import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ElectricComponent } from './components/electric/electric.component';
import { DieselComponent } from './components/diesel/diesel.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardDetailsElectricComponent } from './components/card-details-electric/card-details-electric.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "electric", component: ElectricComponent},
  {path: "electric/:id", component: CardDetailsElectricComponent},
  {path: "diesel", component: DieselComponent},
  {path: "diesel/:id", component: CardDetailsComponent},
  {path: "admin", component: AdminComponent},
  {path: "comments", component: CommentsComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
