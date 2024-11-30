import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuRecouvrementComponent } from './menu-recouvrement.component';
import { ChambreComponent } from '../menu-parametarge/chambre/chambre.component';
import { BordereauSocieteComponent } from './bordereau-societe/bordereau-societe.component';

const routes: Routes = [
  {  
     

    path: '',
    component: MenuRecouvrementComponent,
    


  },
  {
    path: 'bordereau',
    component: BordereauSocieteComponent,
  },
   



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRecouvrementRoutingModule { }
