import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuParametargeRoutingModule } from './menu-parametarge-routing.module';
import { MenuParametargeComponent } from './menu-parametarge.component';
import { ChambreComponent } from './chambre/chambre.component';
import { TagModule } from 'primeng/tag';
import { CompteurService } from '../SharedPages/Compteur/CompteurService';
import { ProductService } from './chambre/ProductService';
import { HttpHandler } from '@angular/common/http';
import { BanqueComponent } from './banque/banque.component';
import { CaisseComponent } from './caisse/caisse.component';
import { ModeReglementComponent } from './mode-reglement/mode-reglement.component';
import { RegionComponent } from './region/region.component';
import { VilleComponent } from './ville/ville.component';
import { TaxeComponent } from './taxe/taxe.component';
import { DeviseComponent } from './devise/devise.component';
import { TauxChangeComponent } from './taux-change/taux-change.component';
import { TypeChambreComponent } from './type-chambre/type-chambre.component';
import { TypeRecetteComponent } from './type-recette/type-recette.component';
import { TypeDepenseComponent } from './type-depense/type-depense.component';
import { ResponsableRemiseComponent } from './responsable-remise/responsable-remise.component';
import { SocieteComponent } from './societe/societe.component';
import { ConventionComponent } from './convention/convention.component';
import { PrestationComponent } from './prestation/prestation.component';
import { TypeSejourComponent } from './type-sejour/type-sejour.component';
import { VatComponent } from './vat/vat.component';
import { EtatChambreComponent } from './etat-chambre/etat-chambre.component';


@NgModule({
  declarations: [
    MenuParametargeComponent, 
    
  ],
  imports: [
    CommonModule,TagModule,
    MenuParametargeRoutingModule
  ],
  providers:[
    CompteurService,ProductService
  ]
})
export class MenuParametargeModule { }
