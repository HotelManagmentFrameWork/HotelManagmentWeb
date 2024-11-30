import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRecouvrementRoutingModule } from './menu-recouvrement-routing.module';
import { MenuRecouvrementComponent } from './menu-recouvrement.component';
import { TabViewModule } from 'primeng/tabview';
import { BordereauSocieteComponent } from './bordereau-societe/bordereau-societe.component';
import { ReglementBordereauSocieteComponent } from './reglement-bordereau-societe/reglement-bordereau-societe.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
 


@NgModule({
  declarations: [
    MenuRecouvrementComponent
    
  ],
  imports: [
    CommonModule,TabViewModule,
    MenuRecouvrementRoutingModule
  ]
})
export class MenuRecouvrementModule { }
