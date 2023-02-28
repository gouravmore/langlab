import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NoAccessComponent } from './no-access.component';

const routes: Routes = [
    
  
  {
      path: '',
      component: NoAccessComponent,
  }
   


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NoAccessModule { }
