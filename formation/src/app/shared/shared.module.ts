import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconLoginComponent } from './components/icon-login/icon-login.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconLoginComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    IconNavComponent,
    IconLoginComponent
  ]
})
export class SharedModule { }
