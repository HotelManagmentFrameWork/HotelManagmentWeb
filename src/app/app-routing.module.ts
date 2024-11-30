import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TestComponent } from './SharedPages/test/test.component';

// const routes: Routes = [
//   {
//     path: '', title: 'Dashboard Page', component: DashboardComponent,
   
//   },{
//     path: 'userprofile', title: 'Dashboard Page', component: UserprofileComponent,
//   },
//   { path: 'home', component: DashboardComponent },
//   { path: 'test', component: TestComponent },


  
// ];

const routes: Routes = [
    {
    path: '', title: 'Dashboard Page', component: DashboardComponent
   
  } ,
 
 
    { path: 'menu_parametrage', loadChildren: () => import('./menu-parametarge/menu-parametarge.module').then(m => m.MenuParametargeModule) , data:{title:' قاعدة البيانات',icon:'fas fa-sun'}},
    { path: 'menu_reception', loadChildren: () => import('./menu-reception/menu-reception.module').then(m => m.MenuReceptionModule) , data:{title:' الإستقبال و الحجز',icon:'fas fa-handshake'}},
    // { path: 'menu_caisse', loadChildren: () => import('./menu-caisse/menu-caisse.module').then(m => m.MenuCaisseModule) },
    { path: 'menu_caisse_recette', loadChildren: () => import('./Caisse/menu-caisse-recette/menu-caisse-recette.module').then(m => m.MenuCaisseRecetteModule) , data:{title:' خزينة الإيرادات',icon:'fas fa-circle-down'}},
    { path: 'menu_caisse_depense', loadChildren: () => import('./Caisse/menu-caisse-depense/menu-caisse-depense.module').then(m => m.MenuCaisseDepenseModule) , data:{title:' خزينة المصروفات',icon:'fas fa-circle-up'}},
    { path: 'menu_edition', loadChildren: () => import('./menu-edition/menu-edition.module').then(m => m.MenuEditionModule) , data:{title:' التقارير',icon:'icon-pie-chart"'}},
    { path: 'menu_recouvrement', loadChildren: () => import('./menu-recouvrement/menu-recouvrement.module').then(m => m.MenuRecouvrementModule) , data:{title:' المصالبات',icon:'fas fa-rectangle-list'}},
 
   
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
