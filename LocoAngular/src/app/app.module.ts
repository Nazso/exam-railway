import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { BuyItemsComponent } from './components/buy-items/buy-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardDetailsElectricComponent } from './components/card-details-electric/card-details-electric.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegComponent } from './components/user-reg/user-reg.component';
import { CommentDetailsComponent } from './components/comments/comment-details/comment-details.component';
import { JwtInterceptor } from './services/jwt.interceptor';

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
    AdminComponent,
    LoginComponent,
    UserRegComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
