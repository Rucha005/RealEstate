import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  menutoggle: string;

  constructor(){
    this.title = 'RealEstate';

    setTimeout(() => {
      this.menutoggle = localStorage.getItem('menutoggleflag')
    }, 1000);
    
  }

}
