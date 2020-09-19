import { Component, OnInit } from '@angular/core';


//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
  path: '/',
  title: 'Dashboard',
  type: 'link',
  icontype: 'tachometer'
},
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  displaypropertymenu: boolean = false;
 
  constructor() {}

  ngOnInit() {}

  clickProperty(){
    this.displaypropertymenu =! this.displaypropertymenu;

  }

}