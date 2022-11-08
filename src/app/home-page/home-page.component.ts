import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Campaign } from '../model/campaign';
import { CampaignService } from '../shared/campain.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private campaign : CampaignService) { }

  ngOnInit(): void {
    this.getAllCampaigns();
  }

  campaignsList: Campaign [] = [];

  getAllCampaigns() {
    this.campaign.getAllCampaigns().subscribe(res => {

      this.campaignsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');   
    })

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i button-left">&#11166;</i>', '<i button-right">&#11164;</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      200: {
        items: 3
      }
    },
    nav: true
  }
}
