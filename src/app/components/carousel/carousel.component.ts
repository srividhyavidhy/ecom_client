import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {OwlOptions,SlidesOutputData} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

 constructor(){}
 customOptions: OwlOptions = {
  
      loop: true,
  
      mouseDrag: false,
  
      touchDrag: false,
  
      pullDrag: false,
  
      dots: false,
  
      navSpeed: 700,
  
      navText: ['', ''],
  
      responsive: {

        0: {
  
          items: 1

        },
  
        400: {
  
          items: 2
  
      },
  
        740: {
  
          items: 3
  
        },
  
        940: {
  
          items: 4
  
        }
  
      },

      nav: true
  
    }
  
     
  
      slides = [
  
        {id: 1, img: "../assets/carousel/img1.jpg"},
  
        {id: 2, img: "../assets/carousel/img2.png"},
  
        {id: 3, img: "../assets/carousel/img3.jpg"},

        {id: 4, img: "../assets/carousel/img1.jpg"},

        {id: 5, img: "../assets/carousel/img2.png"},
  
        {id: 6, img: "../assets/carousel/img3.jpg"},

        {id: 6, img: "../assets/carousel/img1.jpg"}
  
      ];
  
ngOnInit(): void {
  
}


}
