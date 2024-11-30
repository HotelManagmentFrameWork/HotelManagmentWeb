import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuEditionRoutingModule } from './menu-edition-routing.module';
import { MenuEditionComponent } from './menu-edition.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,CalendarModule,
    MenuEditionRoutingModule
  ]
})
export class MenuEditionModule { }
