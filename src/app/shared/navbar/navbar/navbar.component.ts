import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menutoggleflag: boolean = false;
 
  constructor() {}

  ngOnInit() {}

  menutoggle(){
    this.menutoggleflag =! this.menutoggleflag;
    localStorage.setItem('menutoggleflag',this.menutoggleflag.toString()) 
  }
}
