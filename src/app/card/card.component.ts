import { Component, OnInit, Input } from '@angular/core';


export interface CardSchema{
  title?:string;
  subtitle?:string;
  cardImg?:string;
  headerImg?:string;
  actions?:any;
  footer?:any;
  header?:string;
  headerHeight?:string;
  shiny?:boolean;
  [key: string]: any; // Allows any additional properties

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() CardItem:CardSchema | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  

}
