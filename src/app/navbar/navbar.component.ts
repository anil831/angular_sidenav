import { Component, OnInit } from '@angular/core';
import {NavItem} from "../nav-item"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu:NavItem[] = [
    {
      displayName: 'Sidenav',
      iconName:"dock_to_right",
      children:[
        {
          displayName: 'Sidenav1',
          route:"/sidenav1",
          iconName:"dock_to_right"
        },
        {
          displayName: 'Sidenav2',
          route:"/sidenav2",
          iconName:"dock_to_right"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
