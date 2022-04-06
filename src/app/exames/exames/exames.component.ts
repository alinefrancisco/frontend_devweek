import { Component, OnInit } from '@angular/core';

import { Faixaetaria } from '../model/faixaetaria';
import { Incidencia } from '../model/incidencia';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { IncidenciaService } from '../service/incidencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  regioes: Regiao[] = [];
  incidencias: Incidencia[] = [];
  faixaetaria: Faixaetaria[] = [];

  constructor(
    private regiaoService: RegiaoService,
    private incidenciaService: IncidenciaService,
    private faixaetariaService: FaixaetariaService
  ) { }

  ngOnInit(): void {
    //this.regioes = this.regiaoService.listRegioes();
    this.regiaoService.listRegioes().subscribe(regioes => {this.regioes = regioes});
    this.incidenciaService.listIncidencias().subscribe(incidencias => {this.incidencias = incidencias});
    this.faixaetariaService.listFaixaEtaria().subscribe(faixaetaria => {this.faixaetaria = faixaetaria});
  }

}
