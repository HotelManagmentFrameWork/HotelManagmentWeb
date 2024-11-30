import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCaisseDepenseRoutingModule } from './menu-caisse-depense-routing.module';
import { MenuCaisseDepenseComponent } from './menu-caisse-depense.component';
import {  TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    MenuCaisseDepenseComponent
  ],
  imports: [
    CommonModule,TagModule,
    MenuCaisseDepenseRoutingModule
  ]
})
export class MenuCaisseDepenseModule { }
