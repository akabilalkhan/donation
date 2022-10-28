import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndividualFundraiserPageComponent } from './individual-fundraiser-page/individual-fundraiser-page.component';
import { DonateFormPageComponent } from './donate-form-page/donate-form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import {CardsComponent} from './cards/cards.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignupPageComponent,
    HomePageComponent,
    IndividualFundraiserPageComponent,
    DonateFormPageComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
