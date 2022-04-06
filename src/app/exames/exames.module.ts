import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';
import { RegiaoService } from './service/regiao.service';
import { IncidenciaService } from './service/incidencia.service';
import { FaixaetariaService } from './service/faixaetaria.service';


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    RegiaoService,
    IncidenciaService,
    FaixaetariaService
  ]
})
export class ExamesModule { }
