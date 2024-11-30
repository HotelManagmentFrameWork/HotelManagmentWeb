import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuReceptionRoutingModule } from './menu-reception-routing.module';
import { MenuReceptionComponent } from './menu-reception.component';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    MenuReceptionComponent, 
  ],
  imports: [
    CommonModule,TagModule,
    MenuReceptionRoutingModule
  ]
})
export class MenuReceptionModule { }
