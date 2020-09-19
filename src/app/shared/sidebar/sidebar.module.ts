import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxBarcodeModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
