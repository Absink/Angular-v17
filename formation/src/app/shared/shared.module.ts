import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconLoginComponent } from './components/icon-login/icon-login.component';
import { IconFooterComponent } from './components/icon-footer/icon-footer.component';
import { TableGenericComponent } from './components/table-generic/table-generic.component';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDaysDirective } from './directives/color-days.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableGenericComponent,
    TotalPipe,
    DaysPipe,
    ColorStateDirective,
    ColorDaysDirective,
    BtnComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    IconNavComponent,
    IconLoginComponent,
    IconFooterComponent,
    TableGenericComponent,
    TotalPipe,
    DaysPipe,
    ColorStateDirective,
    ColorDaysDirective,
    BtnComponent
  ]
})
export class SharedModule { }
