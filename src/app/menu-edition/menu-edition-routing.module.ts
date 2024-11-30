import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuEditionComponent } from './menu-edition.component';

const routes: Routes = [{ path: '', component: MenuEditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuEditionRoutingModule { }
