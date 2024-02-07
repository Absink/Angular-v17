import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';



@NgModule({
  declarations: [
    IconNavComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    IconNavComponent
  ]
})
export class SharedModule { }
