import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent implements OnInit {
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
