import { NovaConsultaComponent } from './nova-consulta/nova-consulta.component';
import { CapitaisComponent } from './capitais/capitais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nova-consulta', pathMatch: 'full' },
  { path: 'capitais', component: CapitaisComponent },
  { path: 'nova-consulta', component: NovaConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
