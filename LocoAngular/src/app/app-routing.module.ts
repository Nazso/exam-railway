import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ElectricComponent } from './components/electric/electric.component';
import { DieselComponent } from './components/diesel/diesel.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardDetailsElectricComponent } from './components/card-details-electric/card-details-electric.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegComponent } from './components/user-reg/user-reg.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "electric", component: ElectricComponent},
  {path: "electric/:id", component: CardDetailsElectricComponent, canActivate: [AuthGuardService]},
  {path: "diesel", component: DieselComponent},
  {path: "diesel/:id", component: CardDetailsComponent, canActivate: [AuthGuardService]},
  {path: "admin", component: AdminComponent, canActivate: [RoleGuardService]},
  {path: "user", component: UserRegComponent},
  // {path: "comments", component: CommentsComponent},
  {path: "comments/:id", component: CommentsComponent, canActivate: [AuthGuardService]},
  {path: "", component: LoginComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
