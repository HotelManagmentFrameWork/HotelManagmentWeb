import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuParametargeComponent } from './menu-parametarge.component';
import { ChambreComponent } from './chambre/chambre.component';
import { BanqueComponent } from './banque/banque.component';
import { CaisseComponent } from './caisse/caisse.component';
import { ConventionComponent } from './convention/convention.component';
import { DeviseComponent } from './devise/devise.component';
import { ModeReglementComponent } from './mode-reglement/mode-reglement.component';
import { PrestationComponent } from './prestation/prestation.component';
import { RegionComponent } from './region/region.component';
import { ResponsableRemiseComponent } from './responsable-remise/responsable-remise.component';
import { SocieteComponent } from './societe/societe.component';
import { TauxChangeComponent } from './taux-change/taux-change.component';
import { TaxeComponent } from './taxe/taxe.component';
import { TypeChambreComponent } from './type-chambre/type-chambre.component';
import { TypeRecetteComponent } from './type-recette/type-recette.component';
import { TypeDepenseComponent } from './type-depense/type-depense.component';
import { TypeSejourComponent } from './type-sejour/type-sejour.component';
import { VatComponent } from './vat/vat.component';
import { VilleComponent } from './ville/ville.component';
import { EtatChambreComponent } from './etat-chambre/etat-chambre.component';

const routes: Routes = [
  
  { path: '', component: MenuParametargeComponent ,   data:{title:'قاعدة البيانات',icon:'fas fa-sun'}   },
  {
    path: 'chambre',
    component: ChambreComponent ,
    data:{title:'الغرف',icon:'fas fa-window-restore'}
  },
  {
    path: 'banque',
    component: BanqueComponent ,
    data:{title:'المصارف',icon:'fas fa-landmark'}
  },
  {
    path: 'caisse',
    component: CaisseComponent ,
    data:{title:'الخزائن',icon:'fas fa-coins'}
  },
   
  {
    path: 'convention',
    component: ConventionComponent ,
    data:{title:'الإتفقيات',icon:'fas fa-handshake'}
  },
  {
    path: 'devise',
    component: DeviseComponent ,
    data:{title:'الصرف',icon:'fas fa-rectangle-list'}
  },
  {
    path: 'mode_reglement',
    component: ModeReglementComponent ,
    data:{title:'طريقة الدفع',icon:'fas fa-comments-dollar'}
  },
  {
    path: 'prestation',
    component: PrestationComponent ,
    data:{title:'الخدمات',icon:'fas fa-bars-staggered'}
  },
  {
    path: 'region',
    component: RegionComponent ,
    data:{title:'الجنسيات',icon:'fas fa-earth-americas'}
  },
  {
    path: 'responsable_remise',
    component: ResponsableRemiseComponent ,
    data:{title:'مسؤول التخفيض',icon:'fas fa-user'}
  },
  {
    path: 'societe',
    component: SocieteComponent ,
    data:{title:'الجهات',icon:'fas fa-house-chimney-window'}
  },
  {
    path: 'taux_change',
    component: TauxChangeComponent ,
    data:{title:'سعر الصرف',icon:'fas fa-file-invoice-dollar'}
  },
  {
    path: 'taxe',
    component: TaxeComponent ,
    data:{title:'الإستقطاعات',icon:'fas fa-receipt'}
  },
  {
    path: 'type_chambre',
    component: TypeChambreComponent ,
    data:{title:'أنواع الغرف',icon:'fas  fa-bed'}
  },
  {
    path: 'type_recette',
    component: TypeRecetteComponent ,
    data:{title:'أنواع الإيرادات',icon:'fas fa-list-ul'}
  },
  {
    path: 'type_depense',
    component: TypeDepenseComponent ,
    data:{title:'أنواع المصروفات',icon:'fas fa-list-ul'}
  },
  {
    path: 'type_sejour',
    component: TypeSejourComponent ,
    data:{title:'نوع الإقامة',icon:'fas fa-bars-progress'}
  },
  {
    path: 'vat',
    component: VatComponent ,
    data:{title:'الصريبة',icon:'fas fa-percent'}
  },
  {
    path: 'ville',
    component: VilleComponent ,
    data:{title:' المدينة',icon:'fas fa-location-dot'}
  },
  {
    path: 'etat_chambre',
    component: EtatChambreComponent ,
    data:{title:' حالة الغرف',icon:'fas fa-bed'}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuParametargeRoutingModule { }
