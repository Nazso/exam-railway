import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ElectricComponent } from './components/electric/electric.component';
import { DieselComponent } from './components/diesel/diesel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card-electric/card.component';
import { CardDieselComponent } from './components/card-diesel/card-diesel.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { BuyItemsComponent } from './components/buy-items/buy-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardDetailsElectricComponent } from './components/card-details-electric/card-details-electric.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ElectricComponent,
    DieselComponent,
    FooterComponent,
    CardComponent,
    CardDieselComponent,
    CardDetailsComponent,
    NotFoundComponent,
    CommentsComponent,
    BuyItemsComponent,
    CardDetailsElectricComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
