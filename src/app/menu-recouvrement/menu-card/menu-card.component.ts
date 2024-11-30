import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ChambreComponent } from '../../menu-parametarge/chambre/chambre.component';  
import { BanqueComponent } from '../../menu-parametarge/banque/banque.component';  
import { ConfirmationService, MessageService } from 'primeng/api';
import { TabView } from 'primeng/tabview';


@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls:[ './menu-card.component.css' , '.../../../src/assets/css/MenuCard.css']
  ,providers: [MessageService,ConfirmationService]
})
export class MenuCardComponent {
 
}
