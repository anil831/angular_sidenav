

import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { NavItem } from '../nav-item';
import {MatTableDataSource} from '@angular/material/table';


import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/** @title Responsive sidenav */
@Component({
  selector: 'app-sidenav2',
  templateUrl: './sidenav2.component.html',
  styleUrls: ['./sidenav2.component.css']
})
export class Sidenav2Component implements OnInit, OnDestroy {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  private unsubscribe$: Subject<void> = new Subject<void>();
  isMobile: boolean = false;



 /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    }

      /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  menu: NavItem [] = [
        {
          displayName: 'Escritorio',
          iconName: 'desktop_windows',
          route: 'escritorio',
        },        
        {
          displayName: 'Entradas GADE',
          iconName: 'ballot',
          route: 'entradasGADE',
        },
        {
          displayName: 'Expedientes',
          iconName: 'description',          
          children: [
            {
              displayName: 'Mis Expedientes',
              iconName: 'how_to_reg',
              route: '/misexpedientes'
            },
            { 
              displayName: 'Todos',
              iconName: 'waves',
              route: '/todos'
            }
          ]
        },
        {
          displayName: 'Perfiles',
          iconName: 'group',
          children: [
              {
                displayName: 'Búsqueda Perfil',
                iconName: 'search',
                route: '/busquedaperfiles'
              }
            ]
        },
        {
          displayName: 'Navbar',
          iconName: 'dock_to_right',
          route: '',
        }
      ];

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
    ]).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((state:BreakpointState) => {
      this.isMobile = state.matches;
    });  }

  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}