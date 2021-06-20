import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  data: any[];
  constructor() {}

  ngOnInit(): void {
    this.data = [
      {
        id: 0,
        profilepic:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'name',
        image:
          'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        commentText: 'Text Here',
      },
      {
        id: 1,
        profilepic:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'name',
        image:
          'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        commentText: 'Text Here',
      },
      {
        id: 2,
        profilepic:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'name',
        image:
          'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        commentText: 'Text Here',
      },
      {
        id: 3,
        profilepic:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'name',
        image:
          'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        commentText: 'Text Here',
      },
      {
        id: 4,
        profilepic:
          'https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200',
        name: 'name',
        image:
          'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        commentText: 'Text Here',
      },
    ];
  }
}
