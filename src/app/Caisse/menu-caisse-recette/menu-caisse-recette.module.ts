import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCaisseRecetteRoutingModule } from './menu-caisse-recette-routing.module';
import { MenuCaisseRecetteComponent } from './menu-caisse-recette.component';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    MenuCaisseRecetteComponent,
  ],
  imports: [
    CommonModule,TagModule,
    MenuCaisseRecetteRoutingModule
  ]
})
export class MenuCaisseRecetteModule { }
