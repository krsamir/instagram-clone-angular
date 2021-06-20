import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css'],
})
export class TopCardComponent implements OnInit {
  data: any[];

  constructor() {}

  ngOnInit(): void {
    this.data = [
      {
        id: 0,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
      {
        id: 1,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
      {
        id: 2,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
      {
        id: 3,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
      {
        id: 4,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
      {
        id: 5,
        image:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'test',
      },
    ];
  }
}
