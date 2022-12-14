import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateFormPageComponent } from './donate-form-page/donate-form-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndividualFundraiserPageComponent } from './individual-fundraiser-page/individual-fundraiser-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CardsComponent } from './cards/cards.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';

const routes: Routes = [
  {
     path:'',redirectTo:'homepage',pathMatch:'full'
  },
  {
    path:'loginpage',component:LoginpageComponent
  },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'homepage',component:HomePageComponent
  },
  {
    path:'individual-fundrasier-page',component:IndividualFundraiserPageComponent
  },
  {
    path:'donate-form-page',component:DonateFormPageComponent
  },
  {
    path:'cards',component:CardsComponent
  },
  {
    path:'create-a-campaign' , component:CreateCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
