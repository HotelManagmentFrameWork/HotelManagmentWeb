import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuReceptionComponent } from './menu-reception.component';
import { ClotureSessionComponent } from './cloture-session/cloture-session.component';
import { EditionReceptionComponent } from './edition-reception/edition-reception.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { ReceptionComponent } from './reception/reception.component';
import { ReglemenetClientComponent } from './reglemenet-client/reglemenet-client.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TransfertChambreComponent } from './transfert-chambre/transfert-chambre.component';

const routes: Routes = [
  { path: '', component: MenuReceptionComponent }
  ,
  {
    path: 'cloture_session',
    component: ClotureSessionComponent,
    data: { title: ' إقفال خزينة', icon: 'fas fa-lock' }
  }, 
  {
    path: 'edtion_reception',
    component: EditionReceptionComponent,
    data: { title: 'تقارير', icon: 'fas fa-print' }
  },
  {
    path: 'list_chambre',
    component: ListChambreComponent,
    data: { title: 'قائمة الغرف ', icon: 'fas fa-ellipsis-vertical' }
  },
  {
    path: 'reception',
    component: ReceptionComponent,
    data: { title: 'الإستقبال ', icon: 'fas fa-person-circle-plus' }
  },
  {
    path: 'reglement_client',
    component: ReglemenetClientComponent,
    data: { title: 'سداد النزلاء  ', icon: 'fas fa-coins' }
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    data: { title: 'الحجز', icon: 'fas fa-spinner' }
  },
  {
    path: 'transfert_chambre',
    component: TransfertChambreComponent,
    data: { title: ' تحويل غرقة ', icon: 'fas fa-right-left' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuReceptionRoutingModule { }
