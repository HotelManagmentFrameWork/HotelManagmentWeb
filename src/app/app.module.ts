import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component'; 
import { TestComponent } from './SharedPages/test/test.component';
import { BreadcrumbComponent } from './SharedPages/breadcrumb/breadcrumb.component';
import { authInterceptorProviders } from './SharedPages/_helpers/auth.interceptor';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';

import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple'; 
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { FileUploadModule } from 'primeng/fileupload';  
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating'; 
import { InputNumberModule } from 'primeng/inputnumber';
 

import { CheckboxModule } from 'primeng/checkbox';

import { LoadingComponent } from './SharedPages/loading/loading.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalContentComponent } from './SharedPages/shared/modal-content/modal-content.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopBarComponent } from './Navigation/top-bar/top-bar.component';
import { LefSideBarComponent } from './Navigation/lef-side-bar/lef-side-bar.component';
import { ChambreComponent } from './menu-parametarge/chambre/chambre.component';
import { CompteurService } from './SharedPages/Compteur/CompteurService';
import { MenuEditionComponent } from './menu-edition/menu-edition.component';
import { BanqueComponent } from './menu-parametarge/banque/banque.component';
import { CaisseComponent } from './menu-parametarge/caisse/caisse.component';
import { ConventionComponent } from './menu-parametarge/convention/convention.component';
import { DeviseComponent } from './menu-parametarge/devise/devise.component';
import { EtatChambreComponent } from './menu-parametarge/etat-chambre/etat-chambre.component';
import { ModeReglementComponent } from './menu-parametarge/mode-reglement/mode-reglement.component';
import { PrestationComponent } from './menu-parametarge/prestation/prestation.component';
import { RegionComponent } from './menu-parametarge/region/region.component';
import { ResponsableRemiseComponent } from './menu-parametarge/responsable-remise/responsable-remise.component';
import { SocieteComponent } from './menu-parametarge/societe/societe.component';
import { TauxChangeComponent } from './menu-parametarge/taux-change/taux-change.component';
import { TaxeComponent } from './menu-parametarge/taxe/taxe.component';
import { TypeChambreComponent } from './menu-parametarge/type-chambre/type-chambre.component';
import { TypeDepenseComponent } from './menu-parametarge/type-depense/type-depense.component';
import { TypeRecetteComponent } from './menu-parametarge/type-recette/type-recette.component';
import { TypeSejourComponent } from './menu-parametarge/type-sejour/type-sejour.component';
import { VatComponent } from './menu-parametarge/vat/vat.component';
import { VilleComponent } from './menu-parametarge/ville/ville.component';
import { ClotureSessionComponent } from './menu-reception/cloture-session/cloture-session.component'; 
import { EditionReceptionComponent } from './menu-reception/edition-reception/edition-reception.component';
import { ListChambreComponent } from './menu-reception/list-chambre/list-chambre.component';
import { ReceptionComponent } from './menu-reception/reception/reception.component';
import { ReglemenetClientComponent } from './menu-reception/reglemenet-client/reglemenet-client.component';
import { ReservationComponent } from './menu-reception/reservation/reservation.component';
import { TransfertChambreComponent } from './menu-reception/transfert-chambre/transfert-chambre.component';
import { AlimentationCaisseComponent } from './Caisse/menu-caisse-recette/alimentation-caisse/alimentation-caisse.component';
import { MouvementCaisseComponent } from './Caisse/menu-caisse-recette/mouvement-caisse/mouvement-caisse.component';
import { ReceptionSessionComponent } from './Caisse/menu-caisse-recette/reception-session/reception-session.component';
import { SessionCloturerComponent } from './Caisse/menu-caisse-recette/session-cloturer/session-cloturer.component';
import { SessionNonCloturerComponent } from './Caisse/menu-caisse-recette/session-non-cloturer/session-non-cloturer.component';
import { SessionReceptionnerComponent } from './Caisse/menu-caisse-recette/session-receptionner/session-receptionner.component';
import { TransfertCaisseComponent } from './Caisse/menu-caisse-recette/transfert-caisse/transfert-caisse.component';

import { TabViewModule } from "primeng/tabview"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BordereauSocieteComponent } from './menu-recouvrement/bordereau-societe/bordereau-societe.component';
import { MenuCardComponent } from './menu-recouvrement/menu-card/menu-card.component';
import { ReglementBordereauSocieteComponent } from './menu-recouvrement/reglement-bordereau-societe/reglement-bordereau-societe.component';
 


@NgModule({
  imports: [
    ReactiveFormsModule,TagModule,RippleModule,RatingModule,InputTextareaModule,
     CommonModule,ContextMenuModule,ToolbarModule,ConfirmDialogModule,
    BrowserModule,TableModule,ToastModule,InputTextModule,FileUploadModule,
    AppRoutingModule,DropdownModule,ButtonModule,InputNumberModule,NoopAnimationsModule,
    FormsModule,FormsModule,DialogModule,RadioButtonModule, HttpClientModule ,
    CalendarModule, CheckboxModule,BrowserAnimationsModule,TabViewModule

    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,TopBarComponent,LefSideBarComponent,
    UserprofileComponent,BreadcrumbComponent,MenuEditionComponent,
      TestComponent,ModalContentComponent,LoadingComponent
      /// parametrage component
      ,BanqueComponent,CaisseComponent,ChambreComponent,
      ConventionComponent,DeviseComponent,EtatChambreComponent,ModeReglementComponent,
      PrestationComponent,RegionComponent,ResponsableRemiseComponent,
      SocieteComponent,TauxChangeComponent,TaxeComponent,TypeChambreComponent,
      TypeDepenseComponent,TypeRecetteComponent,TypeSejourComponent,VatComponent,VilleComponent,


      //////// menu reception

      ClotureSessionComponent,EditionReceptionComponent,ListChambreComponent,ReceptionComponent,
      ReglemenetClientComponent,ReservationComponent,TransfertChambreComponent,



      //// menu caisse recette 

      
    AlimentationCaisseComponent,
    TransfertCaisseComponent,  SessionReceptionnerComponent, 
    SessionCloturerComponent, MouvementCaisseComponent,
    SessionNonCloturerComponent,  ReceptionSessionComponent,
   

    ///// menu revourement 
    BordereauSocieteComponent,MenuCardComponent,ReglementBordereauSocieteComponent,
  
  
  ],
 
  providers: [LoadingComponent, HttpClient, MessageService, BsModalRef,DatePipe,CompteurService,
    authInterceptorProviders,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true ,  }, 
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
