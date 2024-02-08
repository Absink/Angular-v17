import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconLoginComponent } from './components/icon-login/icon-login.component';
import { IconFooterComponent } from './components/icon-footer/icon-footer.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent
  ]
})
export class SharedModule { }
