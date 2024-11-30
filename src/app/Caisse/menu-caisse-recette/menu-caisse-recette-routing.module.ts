import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCaisseRecetteComponent } from './menu-caisse-recette.component';
import { AlimentationCaisseComponent } from './alimentation-caisse/alimentation-caisse.component';
import { MouvementCaisseComponent } from './mouvement-caisse/mouvement-caisse.component';
import { ReceptionSessionComponent } from './reception-session/reception-session.component';
import { SessionCloturerComponent } from './session-cloturer/session-cloturer.component';
import { SessionNonCloturerComponent } from './session-non-cloturer/session-non-cloturer.component';
import { SessionReceptionnerComponent } from './session-receptionner/session-receptionner.component';
import { TransfertCaisseComponent } from './transfert-caisse/transfert-caisse.component';

const routes: Routes = [
  { path: '', component: MenuCaisseRecetteComponent }
  ,
  {
    path: 'alimentation_caisse',
    component: AlimentationCaisseComponent ,
    data:{title:'دخول أموال',icon:'fas fa-square-plus'}
  },
  {
    path: 'mouvement_caisse',
    component: MouvementCaisseComponent ,
    data:{title:' حركة الخزينة ',icon:'fas fa-list-ol'}
  },
  {
    path: 'reception_session',
    component: ReceptionSessionComponent ,
    data:{title:'إستلام الخزائن',icon:'fas fa-hand-holding-medical'}
  },
  {
    path: 'session_cloturer',
    component: SessionCloturerComponent ,
    data:{title:'الورديات المقفلة',icon:'fas fa-user-lock'}
  },
  {
    path: 'session_non_cloturer',
    component: SessionNonCloturerComponent ,
    data:{title:'الورديات الغير مقفلة',icon:'fas fa-lock-open'}
  },
  {
    path: 'session_receptionner',
    component: SessionReceptionnerComponent ,
    data:{title:'الخزائن المستلمة',icon:'fas fa-grip'}
  },
  {
    path: 'transfert_caisse',
    component: TransfertCaisseComponent ,
    data:{title:'تحويل بين الخزائن',icon:'fas fa-money-bill-transfer'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCaisseRecetteRoutingModule { }
