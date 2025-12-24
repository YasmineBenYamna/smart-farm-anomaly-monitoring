import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-avatars',
    templateUrl: './avatars.component.html',
    styleUrls: ['./avatars.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class AvatarsComponent implements OnInit {

  images = [
    {
      imgSize: "100",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "b-r-8"
    },
    {
      imgSize: "90",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "b-r-30"

    },
    {
      imgSize: "80",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "b-r-35"

    },
    {
      imgSize: "70",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "rounded-circle"

    },
    {
      imgSize: "60",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "b-r-25"

    },
    {
      imgSize: "50",
      img: "assets/images/avtar/avatar-1.jpg",
      shape: "b-r-15"

    },
  ]

  images2 = [
    {
      imgSize: "70",
      images: [
        {
          img: "assets/images/avtar/avatar-5.jpg"
        },
        {
          img: "assets/images/avtar/avatar-4.jpg"
        },
        {
          img: "assets/images/avtar/avatar-1.jpg"
        }
      ]
    },
    {
      imgSize: "60",
      images: [
        {
          img: "assets/images/avtar/avatar-5.jpg"
        },
        {
          img: "assets/images/avtar/avatar-4.jpg"
        },
        {
          img: "assets/images/avtar/avatar-1.jpg"
        }
      ]
    },
    {
      imgSize: "50",
      images: [
        {
          img: "assets/images/avtar/avatar-5.jpg"
        },
        {
          img: "assets/images/avtar/avatar-4.jpg"
        },
        {
          img: "assets/images/avtar/avatar-1.jpg"
        }
      ]
    },
  ]


  initials = [
    {
      imgSize: "100",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "90",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "80",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "70",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "60",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "50",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "40",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "30",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "20",
      img: "assets/images/avtar/avatar-1.jpg",
    },
    {
      imgSize: "10",
      img: "assets/images/avtar/avatar-1.jpg",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
