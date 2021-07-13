import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaConsultaComponent } from './nova-consulta/nova-consulta.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxListModule,
  DxNavBarModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { CapitaisComponent } from './capitais/capitais.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NovaConsultaComponent, CapitaisComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxListModule,
    DxButtonModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
