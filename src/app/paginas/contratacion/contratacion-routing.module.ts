import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfertaLaboralComponent } from './oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contrato/contrato.component';
import { AdendasComponent } from './adendas/adendas.component';
import { PrimerProcesoComponent } from './contrato/primer-proceso/primer-proceso.component';
import { SegundoProcesoComponent } from './contrato/segundo-proceso/segundo-proceso.component';
import { TercerProcesoComponent } from './contrato/tercer-proceso/tercer-proceso.component';
import { CuartoProcesoComponent } from './contrato/cuarto-proceso/cuarto-proceso.component';
import { QuintoProcesoComponent } from './contrato/quinto-proceso/quinto-proceso.component';

const routes: Routes = [
  {
    path: 'oferta-laboral',
    component: OfertaLaboralComponent,
  },
  {
    path: 'contrato',
    component: ContratoComponent,
  },
  {
    path: 'contrato/proceso_1',
    component: PrimerProcesoComponent,
  },
  {
    path: 'contrato/proceso_2',
    component: SegundoProcesoComponent,
  },
  {
    path: 'contrato/proceso_3',
    component: TercerProcesoComponent,
  },
  {
    path: 'contrato/proceso_4',
    component: CuartoProcesoComponent,
  },
  {
    path: 'contrato/proceso_5',
    component: QuintoProcesoComponent,
  },
  {
    path: 'adendas',
    component: AdendasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratacionRoutingModule {}
