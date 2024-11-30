import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

import * as alertifyjs from 'alertifyjs'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { catchError, throwError } from 'rxjs';
 
 

import { DatePipe } from '@angular/common'; 
import { LoadingComponent } from 'src/app/SharedPages/loading/loading.component';
import { EncryptionService } from 'src/app/SharedPages/EcrypteService/EncryptionService';
import { CompteurService } from 'src/app/SharedPages/Compteur/CompteurService';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}





declare const PDFObject: any;
@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css', '.../../../src/assets/css/StyleApplication.css','.../../../src/assets/css/StyleGroupBtnAndTable.css'], providers: [ConfirmationService, MessageService]
})
export class ChambreComponent {
  openModal!: boolean;
  IsLoading = true;
  DisPrint: boolean = true;
  designationAr:any;
  designationLt:any;

  LoadingData: boolean = true;
  numPiece: any;
  // loading: boolean = true;
  loading: boolean = false;

  constructor(public primengConfig: PrimeNGConfig, private datePipe: DatePipe, private router: Router, private encryptionService: EncryptionService, private loadingComponent: LoadingComponent ) {
    // this.primengConfig.ripple = true;
    // this.setLangAR();
  }

  // setLangAR() {
  //   this.primengConfig.setTranslation(this.ar);
  // }
  // ar = {
  //   firstDayOfWeek: 6, // Sunday (Adjust based on your region's convention)
  //   dayNames: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  //   dayNamesShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  //   dayNamesMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  //   monthNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  //   monthNamesShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  //   today: 'اليوم',
  //   clear: 'مسح',
  //   apply: 'بحث',
  //   dateFormat: 'dd/mm/yy',
  //   weekHeader: 'أسبوع'
  // };
  pdfData!: Blob;
  isLoading = false;
  DisDelete: boolean = false;
  DisModif: boolean = false;
  DisApprouv: boolean = false;
  items!: MenuItem[];
  playSoundError() {
    let audio = new Audio();
    audio.src = "../assets/son/erro.mp3";
    audio.load();
    audio.play();
  }
  playSoundSuccess() {
    let audio = new Audio();
    audio.src = "../assets/son/success.mp3";
    audio.load();
    audio.play();
  }

  first: number = 0;

  rows: number = 10;
  VisVoir: boolean = true;
  VisBtnApprouveAvance: boolean = false;
  VisBtnApprouve: boolean = false;
  VisModif: boolean = true;
  visBtnSave: boolean = true; 

  VisBtnDelete: boolean = true; 

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  cols!: any[];

  ngOnInit(): void {


    // this.GelAllReglementFactureFournisseur();
    // this.getValued();
    this.GetColumns();


  }

  RightBtnOptionOP() {
    this.items = [
      { label: 'إلغاء الإعتماد', icon: 'pi pi-fw pi-history', command: () => this.OpenPasswordModal('PasswordModal') },
    ];
  }

  RightBtnOptionAV() {
    this.items = [
      { label: ' x إلغاء الإعتماد', icon: 'pi pi-fw pi-history', command: () => this.OpenPasswordModalAvance('PasswordModalAvance') },
    ];
  }


  GetColumns() {
    this.cols = [
      { field: 'TypeOP', header: 'القسم', width: '5%', filter: "true" },
       { field: 'SourceDepenese', header: 'الغرفة  ', width: '5%', filter: "true" },
      { field: 'codeEtatApprouver', header: 'عدد الأسرة', width: '5%', filter: "false" },
      { field: 'dateCreate', header: 'التاريخ', width: '5%', filter: "true" },

    ];
  }
  @ViewChild('dt1', { static: false }) dt1!: Table;
  filterTable(event: Event, field: string, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;
    this.dt1.filter(filterValue, field, matchMode);
  }



  @Output() closed: EventEmitter<string> = new EventEmitter();
  closeThisComponent() {
    const parentUrl = this.router.url.split('/').slice(0, -1).join('/');
    this.closed.emit(parentUrl);
    this.router.navigate([parentUrl]);
  }

  // DataCodeSaisie = new Array<Compteur>();
  GetCodeSaisieOP() {
    // this.CompteurService.GetcompteurCodeSaisie("CodeSaisieRF").
    //   subscribe((data: any) => {
    //     this.DataCodeSaisie = data;
    //     this.codeSaisie = data.prefixe + data.suffixe;
    //   })
  }

  GetCodeSaisieAV() {
    // this.CompteurService.GetcompteurCodeSaisie("CodeSaisieAF").
    //   subscribe((data: any) => {
    //     this.DataCodeSaisie = data;
    //     this.codeSaisie = data.prefixe + data.suffixe;
    //   })
  }

  RemplirePrint(code: any): void {


  }

  handleRenderPdf(data: any) {
    const pdfObject = PDFObject.embed(data, '#pdfContainer');
  }


  clear(table: Table) {
    table.clear();
    this.searchTerm = '';
  }

  CloseModalPrint() {
    this.visibleModalPrint = false;
    this.pdfData == null;

  }
  clearForm() {
    this.code == undefined;
    this.observation = '';
    this.montant = 0;
    this.codeSaisie = '';
    this.pdfData = new Blob();
    this.selectedFournisseur = '';
    this.selectedTypeDepense = '';
    this.Total = 0;
    // this.selectedEtatApprouve = 1
    this.MntFactFrs = '';
    this.NumFactFrs = '';
    this.selectedReglementFactureFournisseur = null
    this.FactureFournisseurTried = new Array<any>();
    this.selectedCostCentre = '';
    this.selectedCaisse = '';
    this.selectedBanque = '';
    this.numPiece = '';
    this.selectedModeReglement = '';
    this.selectedDevise = '';
 
    this.VisModif = true;
    this.VisBtnApprouveAvance = false;
    this.VisBtnApprouve = true;
    this.VisBtnDelete = true; 
    this.visibleModalAvance = false;
    this.visibleModalApprove = false;
    this.visbileModalPassword = false;
    this.visbileModalPasswordAvance = false;
    this.visbileModalPasswordAvance = false;
    this.visibleModalApprouveAvance = false;

    this.selectedFactures == null;

    this.MontantEnDeviseFacture = '';

  }
  check_actif = false;
  check_inactif = false;
  montantEnDevise: any = 0;
  formHeader = ".....";
  searchTerm = '';
  visibleModal: boolean = false;
  visibleModalPrint: boolean = false;
  visDelete: boolean = false;
  visDeleteAvance: boolean = false;
  code!: number | null;
  codeSaisie: any;
  codecostCenter: any;
  NumFactFrs: any;
  MntFactFrs: any;
  observation: string = 'NULL';

  montant: number = 0;
  TauxChange: number = 0;


  selectedReglementFactureFournisseur: any;

  selectedFactureFournisseur: any;

  etatAprrouve: any;
  oldeEtatApprouve: any;
  onRowSelect(event: any) {
    console.log("Data Selcted:", event.data)
    this.code = event.data.code;
    this.Total = event.data.montant;
    this.codeSaisie = event.data.codeSaisie;
    this.observation = event.data.observation;
    this.montant = event.data.montant;
    this.selectedDevise = event.data.codeDevise;
    this.selectedFournisseur = event.data.codeFournisseur;
    this.selectedTypeDepense = event.data.codeTypeDepense;
    this.DisPrint = false;
    this.selectedValue = event.data.codeEtatApprouver;
    this.NumFactFrs = event.data.numFactureFournisseur;
    this.MntFactFrs = event.data.montantFactureFrounisseur
    this.etatAprrouve = event.data.codeEtatApprouver;
    this.selectedCaisse = event.data.codeCaisse;
    this.selectedBanque = event.data.codeBanque;
    this.numPiece = event.data.numPiece;
    this.selectedModeReglement = event.data.codeModeReglement;
    this.selectedCostCentre = event.data.codeCostProfitCentre;
    if (event.data.codeEtatApprouver == 2 || event.data.codeEtatApprouver == 3) {
      this.DisDelete = true;
      this.DisModif = true;
      this.DisApprouv = true;
      this.VisModif = false;
      this.VisVoir = true;


    } else {
      this.DisDelete = false;
      this.DisModif = false;
      this.DisApprouv = false;
      this.DisPrint = true;
      this.VisVoir = false;
      this.VisModif = true;
    }

    if (event.data.typeOP == "OP") {
      this.VisModif = true; 
      this.VisBtnApprouveAvance = false;
      this.VisBtnApprouve = true;
      this.VisBtnDelete = true; 
      this.RightBtnOptionOP();
    } else { 
      this.VisModif = false;
      this.VisBtnApprouveAvance = true;
      this.VisBtnApprouve = false;
      this.VisBtnDelete = false; 
      this.RightBtnOptionAV();
    }

    if (event.data.caisseDTO == null) {
      this.DisBanque = false;
      this.DisCaisse = true;

    } else {
      this.DisBanque = true;
      this.DisCaisse = false;

    }
  }
  onRowUnselect(event: any) {
    this.code = event.data = null;
    this.selectedReglementFactureFournisseur == null;
    this.DisPrint = true;

    this.selectedFournisseur = '';
    this.selectedDevise = '';
    this.selectedTypeDepense = '';
    this.montantEnDevise = 0;
    this.TauxChange = 0;
    this.observation = ""
    this.listDetailsTypeDepense = new Array<any>();
    this.selectedReglementFactureFournisseur = null
    this.VisBtnApprouveAvance = false;
    this.VisBtnApprouve = true;
    this.VisBtnDelete = true; 
  }



  DeleteReglementFactureFournisseur() {
    // this.depense_service.DeleteReglementFactureFrounisseur(this.selectedReglementFactureFournisseur.code).subscribe(
    //   (res: any) => {
    //     alertifyjs.set('notifier', 'position', 'top-left');
    //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + "Success Deleted");
    //     this.playSoundSuccess();
    //     this.ngOnInit();
    //     this.check_actif = true;
    //     this.check_inactif = false;
    //     this.visDelete = false;
    //     this.clearForm();

    //   }
    // )
  }




  DeleteAvanceFournisseur() {
    // this.depense_service.DeleteAvanceFrounisseur(this.selectedReglementFactureFournisseur.code).subscribe(
    //   (res: any) => {
    //     alertifyjs.set('notifier', 'position', 'top-left');
    //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + "Success Deleted");
    //     this.playSoundSuccess();
    //     this.ngOnInit();
    //     this.check_actif = true;
    //     this.check_inactif = false;
    //     this.visDeleteAvance = false;
    //     this.clearForm();

    //   }
    // )
  }


  clearSelected(): void {
    this.code == undefined;
    this.codeSaisie = '';
    this.observation = '';
    this.montant = 0;
  }

  public onOpenModal(mode: string) {

    this.visibleModal = false;
    this.visDelete = false;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.FactureFournisseurTried = new Array<any>();
    if (mode === 'add') {
      button.setAttribute('data-target', '#Modal');
      this.formHeader = " إضافة إذن صرف"
      this.onRowUnselect(event);
      this.clearSelected();
      this.clearForm();
      this.visibleModal = true;
      this.code == undefined;
      this.GetCodeSaisieOP();
      this.GetFournisseur();
      this.GetDevise();
      this.GetCostCentre();
      this.GetModeReglement();
      this.AraiaDis = false;
      this.visBtnSave = true;
      this.GetTaxe();
      this.columns();


    }
    if (mode === 'edit') {


      if (this.code == undefined || this.selectedReglementFactureFournisseur == null) {
        // alert("Choise A row Please");

        //  
        this.selectedReglementFactureFournisseur = null
        this.clearForm();
        this.onRowUnselect(event);
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
        this.visDelete == false && this.visibleModal == false
        this.playSoundError();
      } else if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {

        button.setAttribute('data-target', '#Modal');
        this.formHeader = " تعديل إذن صرف"
        this.GetColumns();
        this.columns();
        this.LoadFactureFournisseurForModif();
        this.visibleModal = true;
        this.visBtnSave = true;
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetFactureFrounisseurByCode();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();

        this.GetTaxe();
      }

    }

    if (mode === 'Delete') {

      if (this.code == undefined) {
        this.onRowUnselect;
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
        this.playSoundError();
        this.visDelete == false && this.visibleModal == false
      } else if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {

        {
          button.setAttribute('data-target', '#ModalDelete');
          this.formHeader = " حذف إذن صرف"
          this.visDelete = true;
          this.visibleModal = false;
          this.visbileModalPassword = false;
          this.visbileModalPasswordAvance = false;
          this.visibleModalApprove = false;
          this.visibleModalPrint = false;

          // this.onRowUnselect(event);

        }
      }

    }

    if (mode === 'Print') {
      if (this.etatAprrouve == 1) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` التحويل غير مأهل للطباعة `);
        this.playSoundError();
      } else {
        button.setAttribute('data-target', '#ModalPrint');
        this.formHeader = " طباعة إذن صرف"
        this.visibleModalPrint = true;
        this.RemplirePrint(this.selectedReglementFactureFournisseur.code);

        this.onRowUnselect(event);
      }




    }

    if (mode === 'voir') {
      if (this.code == undefined) {
        // alert("Choise A row Please");

        //  
        this.clearForm();
        this.onRowUnselect(event);
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
        this.visDelete == false && this.visibleModal == false
        this.playSoundError();
      } else {

        button.setAttribute('data-target', '#Modal');
        this.formHeader = "عرض إذن صرف"

        this.GetCostCentre();
        this.visibleModal = true;
        this.visBtnSave = false;
        this.GetColumns();
        this.columns();
        this.LoadFactureFournisseurForModif();
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetFactureFrounisseurByCode();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();

        this.GetTaxe();
      }
    }
    if (mode === 'addAvance') {
      button.setAttribute('data-target', '#ModalAvance');
      this.formHeader = " إضافة دفعة على الحساب"
      this.onRowUnselect(event);
      this.clearSelected();
      this.clearForm();
      this.visibleModalAvance = true;
      this.code == undefined;
      this.GetCodeSaisieAV();
      this.GetFournisseur();
      this.GetDevise();
      this.GetCostCentre();
      this.GetModeReglement();
      this.AraiaDis = false;
      this.visBtnSave = true;





    }
    if (mode === 'editAvance') {


      if (this.code == undefined || this.selectedReglementFactureFournisseur == null) {
        // alert("Choise A row Please");

        //  
        this.selectedReglementFactureFournisseur = null
        this.clearForm();
        this.onRowUnselect(event);
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
        this.visDelete == false && this.visibleModal == false && this.visibleModalAvance == false
        this.playSoundError();
      } else if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {
        button.setAttribute('data-target', '#ModalAvance');
        this.formHeader = " تعديل دفعة على الحساب"
        this.visibleModalAvance = true;
        this.visBtnSave = true;
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();
      }
    }

    if (mode === 'DeleteAvance') {

      if (this.code == undefined) {
        this.onRowUnselect;
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
        this.playSoundError();
        this.visDelete == false && this.visibleModal == false && this.visDeleteAvance == false;
      } else if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {

        {
          button.setAttribute('data-target', '#ModalDeleteAvance');
          this.formHeader = " حذف دفعة"
          this.visDeleteAvance = true;
          this.visDelete = false;
          this.visibleModal = false;
          this.visbileModalPassword = false;
          this.visbileModalPasswordAvance = false;
          this.visibleModalApprove = false;
          this.visibleModalPrint = false;

          // this.onRowUnselect(event);

        }
      }

    }
  }


  ApprouveReglementFactureFournisseur() {
    if (this.selectedValue == 1) {
      let body = {
        code: this.code,
        codeUserApprouver: null,
        codeEtatApprouver: 1,
        dateApprouve: null,
        codeSaisie: this.codeSaisie,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        montant: this.Total,
        oldEtatApprouve: this.etatAprrouve


      }



      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.CancelApprouveReglementFactFrs(body).subscribe(

        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "تم التحيين");
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     this.visibleModal = false;
        //     this.visDelete = false;
        //     this.visibleModalPrint = false;
        //     this.clearSelected();
        //     this.visibleModalApprove = false;
        //     this.visbileModalPassword = false;
        //     this.visbileModalPasswordAvance = false;
        //     this.visibleModalPrint = false;
        //     this.selectedEtatApprouve = null;
        //     this.LoadingData = false;
        //   }
        // );
      }
    } else {
      let body = {
        code: this.code,
        codeUserApprouver: "1",
        codeEtatApprouver: this.selectedValue,
        codeSaisie: this.codeSaisie,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        montant: this.Total,
        oldEtatApprouve: this.etatAprrouve
      }



      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.ApprouveReglementFactFrs(body).subscribe(

        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "تم الإعتماد ");
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     this.visDelete = false;
        //     this.visibleModalPrint = false;
        //     this.clearSelected();
        //     this.visibleModal = false;
        //     this.visibleModalApprove = false;
        //     this.visbileModalPassword = false;
        //     this.visbileModalPasswordAvance = false;
        //     this.visibleModalPrint = false;
        //     this.LoadingData = false;
        //     this.selectedEtatApprouve = null;

        //   }
        // );
      }

    }
  }


  ApprouveAvanceFournisseur() {
    if (this.selectedValue == 1) {
      let body = {
        code: this.code,
        codeUserApprouver: null,
        codeEtatApprouver: 1,
        dateApprouve: null,
        codeSaisie: this.codeSaisie,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        montant: this.Total,
        oldEtatApprouve: this.etatAprrouve


      }



      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.CancelApprouveAvanceFrs(body).subscribe(

        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "تم التحيين");
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     this.visibleModal = false;
        //     this.visDelete = false;
        //     this.visibleModalPrint = false;
        //     this.clearSelected();
        //     this.visibleModalApprove = false;
        //     this.visbileModalPassword = false;
        //     this.visbileModalPasswordAvance = false;
        //     this.visibleModalPrint = false;
        //     this.selectedEtatApprouve = null;
        //     this.LoadingData = false;
        //     this.visibleModalApprouveAvance = false;
        //   }
        // );
      }
    } else {
      let body = {
        code: this.code,
        codeUserApprouver: "1",
        codeEtatApprouver: this.selectedValue,
        codeSaisie: this.codeSaisie,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        montant: this.Total,
        oldEtatApprouve: this.etatAprrouve
      }



      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.ApprouveAvanceFrs(body).subscribe(

        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.success('<i class="success fa fa-chevron-down" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "تم الإعتماد ");
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     this.visDelete = false;
        //     this.visibleModalPrint = false;
        //     this.clearSelected();
        //     this.visibleModal = false;
        //     this.visibleModalApprove = false;
        //     this.visbileModalPassword = false;
        //     this.visbileModalPasswordAvance = false;
        //     this.visibleModalPrint = false;
        //     this.visibleModalApprouveAvance = false;
        //     this.LoadingData = false;
        //     this.selectedEtatApprouve = null;

        //   }
        // );
      }

    }
  }

  decryptedValue: string = '';
  approveRF(mode: string) {
    const encryptedValue = sessionStorage.getItem('PassAnnullApprouveFF');
    if (encryptedValue) {
      this.decryptedValue = this.encryptionService.decrypt(encryptedValue);
    } else {
      this.decryptedValue = 'No value found in session storage';
    }
    if (this.password != this.decryptedValue) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + " Password Error");
      this.playSoundError();
    } else {
      this.visbileModalPassword = false;
      this.visbileModalPasswordAvance = false;
      const container = document.getElementById('main-container');
      const contextMenu = document.createElement('button');
      contextMenu.type = 'button';
      contextMenu.style.display = 'none';
      contextMenu.setAttribute('data-toggle', 'modal');
      if (mode === 'ApproveModal') {
        contextMenu.setAttribute('data-target', '#ModalApprove');
        this.formHeader = "إعتماد";
        this.visibleModalApprove = true;
        this.visDelete = false;
        this.visibleModal = false;
        this.visibleModalPrint = false;

        this.LoadingData = false;
        this.GetDevise();
        this.GetColumns();
        this.columns();
        this.LoadFactureFournisseurForModif();
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetFactureFrounisseurByCode();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();

        this.GetTaxe();

      } else if (mode === 'CancelApproveModal') {
        contextMenu.setAttribute('data-target', '#ModalApprove');
        this.formHeader = "إلغاء الإعتماد";
        this.visibleModalApprove = true;
        this.visDelete = false;
        this.visibleModal = false;
        this.visibleModalPrint = false;
        this.LoadingData = false;
        this.GetColumns();
        this.columns();
        this.LoadFactureFournisseurForModif();
        this.visibleModal = false;
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetFactureFrounisseurByCode();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();

        this.GetTaxe();
      } else if (mode === 'CancelApproveModalAvance') {
        contextMenu.setAttribute('data-target', '#ModalApproveAvance');
        this.formHeader = "إلغاء الإعتماد";
        this.visibleModalApprove = false;
        this.visDelete = false;
        this.visibleModal = false;
        this.visibleModalPrint = false;
        this.LoadingData = false;
        this.visibleModal = false;
        this.visibleModalAvance = false;
        this.visibleModalApprouveAvance = true;
        this.onRowSelect;
        this.GetFournisseur();
        this.GetCostCentre();
        this.GetDevise();
        this.GetBanque();
        this.GetModeReglement();
        this.GetCaisse();
      }

    }

    this.password = '';
  }

  approveACDirect(mode: string) {
    if (this.selectedReglementFactureFournisseur == undefined || this.selectedReglementFactureFournisseur.code == undefined) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
      this.visibleModalApprove = false;
      this.playSoundError();
    } else

      if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {


        this.FactureFournisseurTried = new Array<any>();
        this.visbileModalPassword = false;
        this.visbileModalPasswordAvance = false;
        const container = document.getElementById('main-container');
        const contextMenu = document.createElement('button');
        contextMenu.type = 'button';
        contextMenu.style.display = 'none';
        contextMenu.setAttribute('data-toggle', 'modal');
        if (mode === 'ApproveModal') {
          contextMenu.setAttribute('data-target', '#ModalApprove');
          this.formHeader = "إعتماد";
          this.visibleModalApprove = true;
          this.visDelete = false;
          this.visibleModal = false;
          this.visibleModalPrint = false;
          this.LoadingData = false;

          this.GetColumns();
          this.columns();
          this.LoadFactureFournisseurForModif();
          this.onRowSelect;
          this.GetFournisseur();
          this.GetCostCentre();
          this.GetFactureFrounisseurByCode();
          this.GetDevise();
          this.GetBanque();
          this.GetModeReglement();
          this.GetCaisse();

          this.GetTaxe();

        }
      }




  }



  approveAvFrsDirect(mode: string) {
    if (this.selectedReglementFactureFournisseur == undefined || this.selectedReglementFactureFournisseur.code == undefined) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` الرجاء إختيار سطر `);
      this.visibleModalApprove = false;
      this.playSoundError();
    } else

      if (this.selectedReglementFactureFournisseur.codeEtatApprouver == 2) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` إذن الصرف معتمد`);

      } else {


        this.visbileModalPassword = false;
        this.visbileModalPasswordAvance = false;
        const container = document.getElementById('main-container');
        const contextMenu = document.createElement('button');
        contextMenu.type = 'button';
        contextMenu.style.display = 'none';
        contextMenu.setAttribute('data-toggle', 'modal');
        if (mode === 'ApproveModalAvance') {
          contextMenu.setAttribute('data-target', '#ModalApproveAvance');
          this.formHeader = "إعتماد";
          this.visibleModalApprouveAvance = true;
          this.visibleModalApprove = false;
          this.visDelete = false;
          this.visibleModal = false;
          this.visibleModalPrint = false;
          this.LoadingData = false;

          this.onRowSelect;
          this.GetFournisseur();
          this.GetCostCentre();
          this.GetDevise();
          this.GetBanque();
          this.GetModeReglement();
          this.GetCaisse();

        }
      }




  }
  GetDataFromTableEditor: any;
  final = new Array<any>();
  ListAvance = new Array<any>();
  PostFactureFournisseur() {
    let userSession = sessionStorage.getItem("userName");
    if (!this.codeSaisie || !this.selectedFournisseur || !this.selectedDevise) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/required.gif" alt="image" >' + "Field Required");
      this.playSoundError();

    } else {

      const listAvanceDTOs = this.createListAvanceFournisseurDTOs();
      for (let y = 0; y < this.listDetailsTypeDepense.length; y++) {
        this.GetDataFromTableEditor = {
          codeTypeDepense: this.listDetailsTypeDepense[y].code,
          codeCategorieDepense: 3,
          montant: this.listDetailsTypeDepense[y].montant,
          userCreate: userSession
        }
        this.final.push(this.GetDataFromTableEditor);
      }

      let body = {
        codeSaisie: this.codeSaisie,
        observation: this.observation,
        userCreate: userSession,
        dateCreate: new Date().toISOString(), //
        code: this.code,
        montant: this.Total,
        codeFournisseur: this.selectedFournisseur,
        codeDevise: this.selectedDevise,
        codeEtatApprouver: 1,
        detailsReglementFactureFrsDTOs: this.final,
        codeCategorieDepense: 3,
        codeCostProfitCentre: this.selectedCostCentre,
        codeModeReglement: this.selectedModeReglement,
        montantEnDevise: this.montantEnDevise,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        numPiece: this.numPiece,
        codeFactureFournisseur: this.selectedFactureFournisseur,
        tauxDevise: this.TauxChange,
        typeOP: "OP",
        listAvanceFournisseurDTOs: listAvanceDTOs
      }


      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.UpdateReglementFactureFrounisseur(body).subscribe(
        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/ok.png" alt="image" >' + "تم التحيين");

        //     this.visibleModal = false;
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     this.final = new Array<any>();
        //   }
        // );
      }
      else {
        // this.depense_service.PostReglementFactureFrounisseur(body).pipe(
        //   catchError((error: HttpErrorResponse) => {
        //     let errorMessage = '';
        //     this.final = new Array<any>();
        //     return throwError(errorMessage);
        //   })

        // ).subscribe(
        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/ok.png" alt="image" >' + "تم الحفظ بنجاح");
        //     this.visibleModal = false;
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.code;
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //     // let NewCode = res.code;
        //     // this.RemplirePrint(NewCode);
        //     // this.visibleModalPrint = true;
        //     this.final = new Array<any>();

        //   }
        // )
      }
    }
  }




  PostAvanceFournisseur() {
    let y = this.montant * this.TauxChange;
    this.montantEnDevise = y.toFixed(3);

    let userSession = sessionStorage.getItem("userName");
    if (!this.codeSaisie || !this.selectedFournisseur || !this.selectedDevise) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/required.gif" alt="image" >' + "Field Required");
      this.playSoundError();

    } else {

      let body = {
        codeSaisie: this.codeSaisie,
        observation: this.observation,
        userCreate: userSession,
        dateCreate: new Date().toISOString(), //
        code: this.code,
        montant: this.montant,
        codeFournisseur: this.selectedFournisseur,
        codeDevise: this.selectedDevise,
        codeEtatApprouver: 1,
        codeCostProfitCentre: this.selectedCostCentre,
        codeModeReglement: this.selectedModeReglement,
        montantEnDevise: this.montantEnDevise,
        codeCaisse: this.selectedCaisse,
        codeBanque: this.selectedBanque,
        numPiece: this.numPiece,
        tauxDevise: this.TauxChange,
        typeOP: "AV",
        montantAvance: 0
      }


      if (this.code != null) {
        body['code'] = this.code;
        // this.depense_service.UpdateAvanceFrounisseur(body).subscribe(
        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/ok.png" alt="image" >' + "تم التحيين");

        //     this.visibleModalAvance = false;
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();
        //   }
        // );
      }
      else {
        // this.depense_service.PostAvanceFrounisseur(body).pipe(
        //   catchError((error: HttpErrorResponse) => {
        //     let errorMessage = '';
        //     this.final = new Array<any>();
        //     return throwError(errorMessage);
        //   })

        // ).subscribe(
        //   (res: any) => {
        //     alertifyjs.set('notifier', 'position', 'top-left');
        //     alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/ok.png" alt="image" >' + "تم الحفظ بنجاح");
        //     this.visibleModalAvance = false;
        //     this.playSoundSuccess();
        //     this.clearForm();
        //     this.ngOnInit();
        //     this.code;
        //     this.check_actif = true;
        //     this.check_inactif = false;
        //     this.onRowUnselect(event);
        //     this.clearSelected();

        //   }
        // )
      }
    }
  }


  Voids(): void {
    // this.cars = [

    // ].sort((car1, car2) => {
    //   return 0;
    // });

  }



  public remove(index: number): void {
    this.listDetailsTypeDepense.splice(index, 1);
    console.log(index);
  }






  compteur: number = 0;
  listDesig = new Array<any>();

  // onCheckboxChange(event: any, taskId: number): void {
  //   const taskIndex = this.dataFactureFournisseur.findIndex(task => task.code === taskId);
  //   if (taskIndex !== -1) {
  //     this.dataFactureFournisseur[taskIndex].completed = event.checked;
  //     console.log("Data selected from tabs" ,taskIndex )
  //   }
  // }


  // dataRegFactureFournisseur = new Array<ReglementFactureFournisseur>();
  dataRegFactureFournisseur: any;
  listCodeSaisie = new Array<any>();
  codeSaisieSorted: any;
  SourceDepenese = new Array<any>();
  GelAllReglementFactureFournisseur() {
    // this.loading = true;
    // this.depense_service.GetAllReglementFactureFrounisseur().subscribe((data: any) => {
    //   this.LoadingData = false;
    //   this.loadingComponent.IsLoading = false;
    //   this.IsLoading = false;
      this.loading = false;
    //   this.dataRegFactureFournisseur = data;
    //   this.listCodeSaisie = data;
    //   this.codeSaisieSorted = data.codeSaisie;
    //   this.onRowUnselect(event);
    //   this.selectedReglementFactureFournisseur = null
    // })
  }



  selectedFournisseur: any;
  // dataFournisseur = new Array<Fournisseur>();
  listFournisseurPushed = new Array<any>();
  listFournisseurRslt = new Array<any>();
  GetFournisseur() {
    // this.paramService.GetFournisseur().subscribe((data: any) => {
    //   this.LoadingData = false;
    //   this.dataFournisseur = data;
    //   this.listFournisseurPushed = [];
    //   for (let i = 0; i < this.dataFournisseur.length; i++) {
    //     this.listFournisseurPushed.push({ label: this.dataFournisseur[i].designationAr, value: this.dataFournisseur[i].code })
    //   }
    //   this.listFournisseurRslt = this.listFournisseurPushed;
    // })
  }

  selectedCostCentre: any;
  // dataCostCentre = new Array<Fournisseur>();
  listCostCentrePushed = new Array<any>();
  listCostCentreRslt = new Array<any>();
  GetCostCentre() {
    // this.paramService.GetCostCentre().subscribe((data: any) => {

    //   this.dataCostCentre = data;
    //   this.listCostCentrePushed = [];
    //   for (let i = 0; i < this.dataCostCentre.length; i++) {
    //     this.listCostCentrePushed.push({ label: this.dataCostCentre[i].designationAr, value: this.dataCostCentre[i].code })
    //   }
    //   this.listCostCentreRslt = this.listCostCentrePushed;
    // })
  }


  selectedDevise: any;
  // dataDevise = new Array<Devise>();
  listDevisePushed = new Array<any>();
  listDeviseRslt = new Array<any>();
  GetDevise() {
    // this.paramService.GetDevise().subscribe((data: any) => {
    //   this.LoadingData = false;
    //   this.dataDevise = data;
    //   this.listDevisePushed = [];
    //   for (let i = 0; i < this.dataDevise.length; i++) {
    //     this.listDevisePushed.push({ label: this.dataDevise[i].designationAr, value: this.dataDevise[i].code })
    //   }
    //   this.listDeviseRslt = this.listDevisePushed;
    // })
  }


  selectedTypeDepense: any;
  // dataselectedTypeDepense = new Array<TypeDepense>();
  listselectedTypeDepensePushed = new Array<any>();
  listselectedTypeDepenseRslt = new Array<any>();
  GetTypeDepense() {
    // this.paramService.GetTypeDepenseByCategorie(3).subscribe((data: any) => {
    //   this.LoadingData = false;
    //   this.dataselectedTypeDepense = data;
    //   this.listselectedTypeDepensePushed = [];
    //   for (let i = 0; i < this.dataselectedTypeDepense.length; i++) {
    //     this.listselectedTypeDepensePushed.push({ label: this.dataselectedTypeDepense[i].designationAr, value: this.dataselectedTypeDepense[i].code })
    //   }
    //   this.listselectedTypeDepenseRslt = this.listselectedTypeDepensePushed;
    // })
  }




  GetFactureFrounisseurByCode() {
    // this.depense_service.GetAllReglementFactureFrounisseurByCode(this.selectedReglementFactureFournisseur.code).subscribe((data: any) => {
    //   this.listDetailsTypeDepense = data.detailsReglementFactureFrsDTOs;


    //   for (let i = 0; i < this.listDetailsTypeDepense.length; i++) {
    //     this.listDetailsTypeDepense[i].code = data.detailsReglementFactureFrsDTOs[i].codeTypeDepense;
    //     this.listDetailsTypeDepense[i].designationArTypeDepense = data.detailsReglementFactureFrsDTOs[i].designationArTypeDepense;
    //   }
    // })
  }

  CalculTaxEchange() {
    // taux echange devise selected 
    // taux echange * ngmodel montant 

  }


  getPicValider() {
    return "url('assets/files/images/etat_RCTotal.png')";
  }

  getPicRefuser() {
    return "url('assets/files/images/etat_NRCP.png')";
  }

  getPicNonEncore() {
    return "url('assets/files/images/etat_RCPPartiel.png')";
  }

  // GetPicAvance() {
  //   return "url('assets/files/images/etat_NRCP.png')";
  // }
  // GetPicOP() {
  //   return "url('assets/files/images/etat_RCPPartiel.png')";
  // }

  // getBackgroundImage() {
  //   return this.dataRegFactureFournisseur.TypeOP === 'OP' ? this.GetPicOP() : this.GetPicAvance();
  // }

  // getInnerHtml() {
  //   return this.dataRegFactureFournisseur.TypeOP === 'OP' ? '<i class="fa-solid fa-money-bill-wave iconAvance">' : ''; // Add <i> if TypeOP is 'OP'
  // }



  // EtatApprouve!: any[];
  // selectedEtatApprouve: any;
  // getValued() {
  //   this.EtatApprouve = [
  //     { name: 'غير ماكد', code: '1', url: 'assets/files/images/etat_RCPPartiel.png' },
  //     { name: 'مرفوض', code: '3', url: 'assets/files/images/etat_NRCP.png' },
  //     { name: 'مأكد', code: '2', url: 'assets/files/images/etat_RCTotal.png' },
  //   ];
  // }
  // GetCodeEtatApprouver() {
  //   if (this.selectedEtatApprouve == undefined) {

  //   } else {
  //     // this.depense_service.GetReglementFactureFrounisseurByEtatApprouved(this.selectedEtatApprouve.code).subscribe((data: any) => {
  //     //   this.loadingComponent.IsLoading = false;
  //     //   this.IsLoading = false;
  //     //   this.LoadingData = false;
  //     //   this.dataRegFactureFournisseur = data;
  //     //   this.onRowUnselect(event);

  //     // })

  //   }
  // }


  clickDropDownUp(dropDownModUp: any) {
    if ((dropDownModUp.documentClickListener !== undefined && dropDownModUp.selectedOption !== null && dropDownModUp.itemClick) || dropDownModUp.itemClick) {
      dropDownModUp.focus();
      if (!dropDownModUp.overlayVisible) {
        dropDownModUp.show();
        event!.preventDefault();
      } else {
        dropDownModUp.hide();
        event!.preventDefault();
      }
    }
  }
  listDetailsTypeDepense = new Array<any>();
  Newcompteur: number = 0;
  NoAction() {

  }

  PushTableData() {
    var exist = false;
    for (var y = 0; y < this.listDetailsTypeDepense.length; y++) {
      if (this.selectedTypeDepense != this.listDetailsTypeDepense[y].codeTypeDepense && this.selectedTypeDepense != this.listDetailsTypeDepense[y].code) {
        exist = false;
      } else {
        exist = true;
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/error.gif" alt="image" >' + ` Item Used`);
        this.playSoundError();
        break;
      }
    }

    // control remplire codeUnite + codeColoris + qte 

    if ((this.selectedTypeDepense != undefined) && (this.selectedTypeDepense != "") && (!exist)) {
      // this.paramService.GetTypeDepenseByCode(this.selectedTypeDepense).subscribe((Newdata: any) => {
      //   this.Newcompteur = this.Newcompteur + 1;
      //   this.LoadingData = false;
      //   this.listDetailsTypeDepense.push(Newdata);
      //   this.listDetailsTypeDepense[y].montant = 0;
      // })
    }
  }

  Total: number = 0;
  TotalAvance: number = 0;
  TotalAvanceEnDevisePrincipal: number = 0;
  TotalEnDevisePrincipal: number = 0
  // montantDevise: number = 0;
  ValueMntChanged() {


    let x = 0;
    let z = 0;
    for (let list of this.listDetailsTypeDepense) {
      x += +list.montant;


    }
    this.Total = x;




    let y = this.Total * this.TauxChange;
    this.montantEnDevise = y.toFixed(3);

    this.ValeurTotalFacture = this.Total;


  }
  visbileModalPassword: boolean = false;
  visbileModalPasswordAvance: boolean = false;

  selectedValue: any = 1;
  visibleModalApprove: boolean = false;
  visibleModalAvance: boolean = false;
  visibleModalApprouveAvance: boolean = false;
  password: any;



  DesigDevise: any





  OpenPasswordModal(mode: string) {
    if (this.selectedReglementFactureFournisseur == null) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "الرجاء إختبار سطر ");
      this.visibleModalApprove = false;
      this.visDelete = false;
      this.visibleModal = false;
      this.visibleModalPrint = false;
      this.visbileModalPassword = false;
      this.visbileModalPasswordAvance = false;
      this.playSoundError();
    } else {
      if (this.selectedValue == 1) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "إذن الصرف ليس مأكد");
        this.playSoundError();
      } else {
        const container = document.getElementById('main-container');
        const contextMenu = document.createElement('button');
        contextMenu.type = 'button';
        contextMenu.style.display = 'none';
        contextMenu.setAttribute('data-toggle', 'modal');
        if (mode === 'PasswordModal') {
          contextMenu.setAttribute('data-target', '#ModalPassword');
          this.formHeader = "كلمة السر";
          this.visibleModalApprove = false;
          this.visDelete = false;
          this.visibleModal = false;
          this.visibleModalPrint = false;
          this.visbileModalPassword = true;
          this.visbileModalPasswordAvance = false;
        }

      }
    }
  }


  OpenPasswordModalAvance(mode: string) {
    if (this.selectedReglementFactureFournisseur == null) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "الرجاء إختبار سطر ");
      this.visibleModalApprove = false;
      this.visDelete = false;
      this.visibleModal = false;
      this.visibleModalPrint = false;
      this.visbileModalPassword = false;
      this.visbileModalPasswordAvance = false;
      this.playSoundError();
    } else {
      if (this.selectedValue == 1) {
        alertifyjs.set('notifier', 'position', 'top-left');
        alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "الدفعة ليس مأكدة");
        this.playSoundError();
      } else {
        const container = document.getElementById('main-container');
        const contextMenu = document.createElement('button');
        contextMenu.type = 'button';
        contextMenu.style.display = 'none';
        contextMenu.setAttribute('data-toggle', 'modal');
        if (mode === 'PasswordModalAvance') {
          contextMenu.setAttribute('data-target', '#ModalPasswordAvance');
          this.formHeader = "كلمة  x السر";
          this.visibleModalApprove = false;
          this.visDelete = false;
          this.visibleModal = false;
          this.visibleModalPrint = false;
          this.visbileModalPassword = false;
          this.visbileModalPasswordAvance = true;
        }

      }
    }
  }

  CloseModalPassWord() {
    this.visbileModalPassword = false;
    this.visbileModalPasswordAvance = false;
    this.clearSelected();
    this.password = '';
  }

  // selectedFacture: FactureFournisseur[] = [];
  // factureFrs: FactureFournisseur[] = [];
  selectAllCars() {
    // if (this.selectedFacture.length === this.factureFrs.length) {
    //   this.selectedFacture = [];
    // } else {
    //   this.selectedFacture = [...this.factureFrs];
    // }
  }
  // selectedFactures: FactureFournisseur | null = null;


  onRowSelectFromTabs(event: any) {
    // const selectedFactures = event.data;
    // this.selectedFactures = selectedFactures;
    // this.selectedFactureFournisseur = event.data.code;
    // const car = event.data;
    // if (this.selectedFacture.includes(car)) {
    //   this.selectedFacture = this.selectedFacture.filter(c => c !== car);
    //   this.selectedTotal = new Array<any>();
    // } else {
    //   this.selectedFacture.push(car);
    //   this.listDetailsTypeDepense = event.data.detailsFactureFournisseursDTOs;
    //   for (let i = 0; i < this.listDetailsTypeDepense.length; i++) {
    //     this.listDetailsTypeDepense[i].code = event.data.detailsFactureFournisseursDTOs[i].codeTypeDepense;
    //     this.listDetailsTypeDepense[i].designationArTypeDepense = event.data.detailsFactureFournisseursDTOs[i].designationArTypeDepense;
    //   }

    //   this.ValueMntChanged();
    //   this.GetTotalData();
    // }

  }
  onRowUnselectFromTabs(event: any) {
    // this.selectedFactures = null;
    // const car = event.data;
    // this.selectedTotal = new Array<any>();
    // console.log("uncheck from selecetd row")
    // this.listDetailsTypeDepense = new Array<any>();
    // this.Total = 0
    // this.selectedFacture = this.selectedFacture.filter(c => c !== car);
    // this.selectedModeReglement = null;
    // this.selectedCaisse = null
  }
  // selectedTotal: Total[] = []; 

  selectedTotal = new Array<any>;
  onCheckboxChange(cars: any) {
    // if (this.selectedFacture.includes(cars)) {
    //   this.selectedFactures = null;
    //   // const car = cars.data;
    //   this.selectedTotal = new Array<any>();
    //   console.log("uncheck from selecetd checkbox")
    //   this.listDetailsTypeDepense = new Array<any>();
    //   this.Total = 0
    //   this.selectedFacture = this.selectedFacture.filter(c => c !== cars);
    // } else {
    //   this.selectedFacture = this.selectedFacture.filter(c => c !== cars);
    //   console.log("select from checkbox")

    // }

  }
  selectedFactures:any;
  // Method to check if a car is selected
  isCarSelected(car: any): boolean {
    return this.selectedFactures === car;
  }
  selectedFacture:any
  isCarSelectedAvance(car: any): boolean {
    return this.selectedFacture.includes(car); // Correct check for inclusion
  }
  onCheckboxChangeTabAvance(car: any) {
    const index = this.selectedAvance.indexOf(car);

    if (index > -1) {
      this.selectedAvance.splice(index, 1); // Use splice to remove the element
      this.valeurTotalAvance = 0;
      this.calculateTotalAvance(); // Recalculate totals after removing
      this.GetTotalData();

    } else {
      this.selectedAvance.push(car);
      this.calculateTotalAvance();
      this.valeurTotalAvance = this.TotalAvance;
      this.GetTotalData();

    }
  }


  calculateTotalAvance() {
    this.TotalAvance = this.selectedAvance.reduce((sum, facture) => sum + (facture.montant || 0), 0);
    this.TotalAvanceEnDevisePrincipal = this.selectedAvance.reduce((sum, facture) => sum + (facture.montantEnDevise || 0), 0);
  }

  createListAvanceFournisseurDTOs(): { code: number, apurer: boolean }[] {
    return this.selectedAvance.map(avance => ({
      code: avance.code,
      apurer: true
    }));
  }


  selectedAvance: any[] = [];

  columnTabs!: any[];
  columns() {
    this.columnTabs = [

      { field: '', header: '' },
      { field: 'codeSaisie', header: 'الرمز' },
      { field: 'dateCreate', header: 'التاريخ' },
      { field: 'numFactureFournisseur', header: 'رقم فاتورة المورد', width: '60px', fontSize: '12px !important  ' },
      { field: 'montant', header: 'القيمة  ' },
      { field: 'montantEnDevise', header: 'الفيمة بالعملة المحلية' }


    ];
  }

  DisBanque: boolean = true;
  DisCaisse: boolean = true;
  FactureFournisseurTried = new Array<any>();
  MontantEnDeviseFacture: any;
  LoadFactureFournisseur() {
    if (this.selectedDevise == null || this.selectedDevise == "" || this.selectedDevise == undefined) {

    } else {
      this.listDetailsTypeDepense = new Array<any>();
      this.FactureFournisseurTried = new Array<any>();
      this.selectedFactureFournisseur = null;
      this.Total = 0
      this.v2 = true;
      // this.depense_service.GetAllFactureFrounisseurByCodeFournisseurAndCodeDeviseAndPaidFalseAndEtatApprouve(this.selectedFournisseur, this.selectedDevise, 2).subscribe((data: any) => {
      //   this.FactureFournisseurTried = data;
      //   this.MontantEnDeviseFacture = data.montantEnDevise;
      // })

      this.GetListAvanceFournisseurNonApurer();
    }

  };

  AraiaDis: boolean = false;
  v2: boolean = false;
  @ViewChild('dt2') dt2!: Table;
  LoadFactureFournisseurForModif() {
    // this.depense_service.GetAllFactureFrounisseurByCode(this.selectedReglementFactureFournisseur.codeFactureFournisseur).subscribe((data: any) => {
    //   this.FactureFournisseurTried.push(data);
    //   this.selectedFactureFournisseur = data.code;
    //   this.AraiaDis = true;
    //   if (this.selectedReglementFactureFournisseur.codeModeReglement == 1) {
    //     this.DisCaisse = false;
    //     this.DisBanque = true;
    //   } else {
    //     this.DisCaisse = true;
    //     this.DisBanque = false;
    //   }

    // })
  };

  codeDevise: any;
  ClearData() {



    if (this.selectedDevise == "" || this.selectedDevise == null || this.selectedDevise == undefined) {
      this.selectedFournisseur = null;
      this.FactureFournisseurTried = new Array<any>();
      this.selectedCaisse = null;
      this.listDetailsTypeDepense = new Array<any>();
      this.selectedFactureFournisseur = null;
      this.selectedCostCentre = null
    } else {
      this.selectedFournisseur = null;
      this.FactureFournisseurTried = new Array<any>();
      this.selectedCaisse = null;
      this.listDetailsTypeDepense = new Array<any>();
      this.selectedFactureFournisseur = null;

      this.selectedCostCentre = null

      this.codeDevise = this.selectedDevise;

      this.GetTauxDeChange(this.selectedDevise);


    }
  }



  selectedCaisse: any;
  dataCaisse = new Array<any>();
  listCaissePushed = new Array<any>();
  listCaisseRslt = new Array<any>();
  GetCaisse() {
    if (this.selectedDevise == '' || this.selectedDevise == undefined) {
      alertifyjs.set('notifier', 'position', 'top-left');
      alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + "الرجاء إختيار العملة");
      this.playSoundError();
      this.selectedDevise == ''
    } else {
      // this.paramService.GetCaisseByCodeDevise(this.selectedDevise).subscribe((data: any) => {
      //   this.dataCaisse = data;
      //   this.listCaissePushed = [];
      //   for (let i = 0; i < this.dataCaisse.length; i++) {
      //     this.listCaissePushed.push({ label: this.dataCaisse[i].designationAr, value: this.dataCaisse[i].code })
      //   }
      //   this.listCaisseRslt = this.listCaissePushed;
      // })
    }


  }

  selectedModeReglement: any;
  dataModeReglement = new Array<any>();
  listModeReglementPushed = new Array<any>();
  listModeReglementRslt = new Array<any>();
  GetModeReglement() {
    // this.paramService.GetModeReglement().subscribe((data: any) => {
    //   this.dataModeReglement = data;
    //   this.listModeReglementPushed = [];
    //   for (let i = 0; i < this.dataModeReglement.length; i++) {
    //     this.listModeReglementPushed.push({ label: this.dataModeReglement[i].designationAr, value: this.dataModeReglement[i].code })
    //   }
    //   this.listModeReglementRslt = this.listModeReglementPushed;
    // })
  }



  selectedBanque: any;
  dataBanque = new Array<any>();
  listBanquePushed = new Array<any>();
  listBanqueRslt = new Array<any>();
  GetBanque() {
    // this.paramService.GetBanque().subscribe((data: any) => {
    //   this.dataBanque = data;
    //   this.listBanquePushed = [];
    //   for (let i = 0; i < this.dataBanque.length; i++) {
    //     this.listBanquePushed.push({ label: this.dataBanque[i].designationAr, value: this.dataBanque[i].code })
    //   }
    //   this.listBanqueRslt = this.listBanquePushed;
    // })
  }


  GetBanqueIfNeed() {
    // console.log("modereg seletced", this.selectedModeReglement)
    // this.paramService.GetModeReglementByCode(this.selectedModeReglement).subscribe((data: any) => {
    //   if (data.reqBanque == true) {
    //     this.GetBanque();
    //     this.DisBanque = false;
    //     this.DisCaisse = true
    //     this.selectedCaisse = null;
    //   } else {
    //     this.DisBanque = true;
    //     this.selectedBanque = null;
    //     this.numPiece = '';
    //     this.DisCaisse = false
    //     this.GetCaisse();
    //   }
    // })


  }



  GetTauxDeChange(code: number) {
    // this.paramService.GetTauxDeChangeByCodeDevise(code).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error?.detail == "Cannot invoke \"com.DevPointSystem.Comptabilite.Parametrage.domaine.TauxDeChange.getCode()\" because \"domaine\" is null") {

    //       alertifyjs.set('notifier', 'position', 'top-left');
    //       alertifyjs.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;font-size: 15px !important;;""></i>' + ` لا يوجد سعر صرف للعملة`);
    //       this.TauxChange = 0;
    //       this.playSoundError();
    //     } else {
    //     }

    //     return throwError(errorMessage);
    //   })
    // ).subscribe((data: any) => {
    //   this.TauxChange = data.tauxChange;
    // })
  }



  listAvanceFournisseurNonApurer = new Array<any>();
  selectedAvanceFournisseur: any;
  GetListAvanceFournisseurNonApurer() {
    // this.depense_service.GetAllAvanceFrounisseurByCodeFournisseurAndNonApurer(this.selectedFournisseur, false).subscribe((data: any) => {
    //   this.listAvanceFournisseurNonApurer = data;

    // });
  }

  listSumTable = new Array<any>();
  RemplireTableTotal() {
    let totalFactureSelected = this.Total;
    // let totalAvanceSelcted = 
    this.listSumTable.push(totalFactureSelected);
  }


  // DataTotal = new Array<any>();
  ValeurTotalFacture: number = 0;
  valeurTotalAvance: number = 0;
  valeurTotalTaxe: number = 0;
  valeurTotalNet: number = 0;
  valeurTotalNetEnDevise: number = 0;
  GetTotalData() {
    let v1 = this.ValeurTotalFacture;
    let v2 = this.valeurTotalAvance;
    let v3 = this.valeurTotalTaxe;
    let v4 = this.valeurTotalNet;
    let v5 = this.valeurTotalNetEnDevise;
    let TotalNet = (v1 - v2 - v3) * this.TauxChange;
    this.selectedTotal = [
      { name: 'Row 1', valeurTotalFactureSelected: v1, valeurTotalAvanceSelected: v2, valeurTotalTaxeSelected: v3, valeurTotalNet: v1 - v2 - v3, valeurTotalNetEnDevise: TotalNet.toFixed(3) },
    ];
  }

  TotalTaxe: any;
  clickDropDownUpTaxe(dropDownModUp: any) {
    if ((dropDownModUp.documentClickListener !== undefined && dropDownModUp.selectedOption !== null && dropDownModUp.itemClick) || dropDownModUp.itemClick) {
      dropDownModUp.focus();
      if (!dropDownModUp.overlayVisible) {
        dropDownModUp.show();
        event!.preventDefault();
      } else {
        dropDownModUp.hide();
        event!.preventDefault();
      }
    }
  }
  ListDetailsTaxe = new Array<any>();
  selectedTaxe: any;
  PushTableDataTaxe() {
    var exist = false;

    for (var y = 0; y < this.ListDetailsTaxe.length; y++) {
      if (this.selectedTaxe != this.ListDetailsTaxe[y].code) {
        exist = false;
      } else {
        exist = true;

        alertifyjs.set('notifier', 'position', 'top-left');

        alertifyjs.notify('<img  style="width: 30px; height: 30px; margin: 0px 0px 0px 15px" src="/assets/files/images/error.gif" alt="image" >' + ` Item Used`);

        this.playSoundError();
        break;
      }
    }


    if ((this.selectedTaxe != undefined) && (this.selectedTaxe != "") && (!exist)) {
      // this.paramService.GetTaxeByCode(this.selectedTaxe).subscribe((Newdata: any) => {
      //   this.Newcompteur = this.Newcompteur + 1;

      //   this.ListDetailsTaxe.push(Newdata);
      //   this.ListDetailsTaxe[y].montant = 0;
      //   // console.log(" PushTableData listDataDAWithDetails", this.listDetailsTypeDepense);


      // })
    }

  }



  public removeTaxe(index: number): void {
    this.ListDetailsTaxe.splice(index, 1);
    this.ValueMntChangedTaxe();
  }
  ValueMntChangedTaxe() {
    let x = 0;
    for (let list of this.ListDetailsTaxe) {
      x += +list.montant;
    }
    this.TotalTaxe = x;
    this.valeurTotalTaxe = this.TotalTaxe;
    this.GetTotalData();

  }

  dataselectedTaxe = new Array<any>();
  listselectedTaxePushed = new Array<any>();
  listselectedTaxeRslt = new Array<any>();
  GetTaxe() {
    // this.paramService.GetTaxe().subscribe((data: any) => {

    //   this.dataselectedTaxe = data;
    //   this.listselectedTaxePushed = [];
    //   for (let i = 0; i < this.dataselectedTaxe.length; i++) {
    //     this.listselectedTaxePushed.push({ label: this.dataselectedTaxe[i].designationAr, value: this.dataselectedTaxe[i].code })
    //   }
    //   this.listselectedTaxeRslt = this.listselectedTaxePushed;
    // })
  }

}


