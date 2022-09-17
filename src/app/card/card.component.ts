import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public cardData:Array<any> = [
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 1',
    cardDescription: 'card description 1',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 2',
    cardDescription: 'card description 2',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 3',
    cardDescription: 'card description 3',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 4',
    cardDescription: 'card description 4',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 5',
    cardDescription: 'card description 5',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 6',
    cardDescription: 'card description 6',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 7',
    cardDescription: 'card description 7',
    completed: false
    },
    {
    cardImageUrl: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80',
    cardTitle: 'title 8',
    cardDescription: 'card description 8',
    completed: false
    },
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
