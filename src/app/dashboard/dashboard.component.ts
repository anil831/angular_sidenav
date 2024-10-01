import { Component } from '@angular/core';
import {CardSchema} from "../card/card.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  noOfCards: number[] = [1, 2, 3, 4, 5, 6];
  largeCard:CardSchema= {
    title:"Admin",
    subtitle:"Anil kumar Tanneeru",
    headerHeight:'60px',
    headerImg:'https://material.angular.io/assets/img/examples/shiba1.jpg',
    cardImg:'https://material.angular.io/assets/img/examples/shiba2.jpg'
  };
  cardItems:CardSchema[] = [
    {
      title:"Admins",
      noOfUsers:1,
      headerHeight:'60px',
      shiny:true
    },
    {
      title:"Operations Managers",
      noOfUsers:1,
      headerHeight:'60px',
      shiny:true

   
    },
    {
      title:"Education TL's",
      noOfUsers:1,
      headerHeight:'60px',
      shiny:true

    
    },
    {
      title:"Employment TL's",
      noOfUsers:1,
      headerHeight:'60px',
      shiny:true

    
    },
    {
      title:"Education Analyst's",
      noOfUsers:7,
      headerHeight:'60px',
      shiny:true

    
    },
    {
      title:"Employment Analyst's",
      noOfUsers:5,
      headerHeight:'60px',
      shiny:true

    
    }
]

}
