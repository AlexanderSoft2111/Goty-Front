import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GraficoHorizonalBarrasComponent } from './grafico-horizonal-barras/grafico-horizonal-barras.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    GraficoHorizonalBarrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports:[
    NavBarComponent,
    GraficoHorizonalBarrasComponent
  ]
})
export class ComponentsModule { }
