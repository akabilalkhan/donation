import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
