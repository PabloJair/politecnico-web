import { Component } from '@angular/core';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'scale(1.4)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CarouselComponent {

  imagesData: Image[] = [

    {
      src: 'img_7.jpg',
      alt: 'image',
      title: 'image'
    },
    {
      src: 'img_8.jpg',
      alt: 'image',
      title: 'image'
    },
    {
      src: 'img_9.jpg',
      alt: 'image',
      title: 'image'
    },
    {
      src: 'img_10.jpg',
      alt: 'image',
      title: 'image'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    autoplay:true,

    nav: false,
    center: true,
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
        items: 1
      },
      941: {
        items: 1
      }
    },
  }
}


interface Image {
  src: string;
  title?: string;
  alt?: string;
}
