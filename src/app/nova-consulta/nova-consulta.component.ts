import { Consulta } from './../models/consulta';
import { ConsultaTempoService } from './../services/consulta-tempo.service';
import { ConsultaCidadesService } from '../services/consulta-cidades.service';
import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-nova-consulta',
  templateUrl: './nova-consulta.component.html',
  styleUrls: ['./nova-consulta.component.css'],
})
export class NovaConsultaComponent implements OnInit {
  consultas: Consulta[] = [];
  ufs: any[] = [];
  cidades: any[] = [];
  ufAtiva!: string;
  cidadeAtiva!: string;
  consulta!: Consulta;

  constructor(
    private consultaCidadesService: ConsultaCidadesService,
    private consultaTempoSevice: ConsultaTempoService
  ) {}

  ngOnInit(): void {
    this.consultaCidadesService.getUfs().subscribe((uf) => {
      let payload: any = uf;
      this.ufs = payload;
    });
  }

  getLastId() {
    let lastId: number;
    if (this.consultas.length > 0) {
      lastId = this.consultas[this.consultas.length - 1].id;
      this.consulta.id = lastId + 1;
    } else {
      this.consulta.id = 1;
    }
  }

  onSelectUf(e: any) {
    this.ufAtiva = e.value;
    if (this.consulta) {
      this.consulta = new Consulta();
      this.consulta.localidade = e.value;
      this.getLastId();
      this.consultaCidadesService
        .getCidadesByUf(this.ufAtiva)
        .subscribe((cidade) => {
          let payload: any = cidade;
          this.cidades = payload;
        });
    } else {
      this.consulta = new Consulta();
      this.consulta.localidade = e.value;
      this.getLastId();
      this.consultaCidadesService
        .getCidadesByUf(this.ufAtiva)
        .subscribe((cidade) => {
          let payload: any = cidade;
          this.cidades = payload;
        });
    }
  }

  onSelectCidade(e: any) {
    this.cidadeAtiva = e.value;
    this.consulta.localidade = `${e.value} - ${this.consulta.localidade}`;
    this.pesquisar();
  }

  pesquisar() {
    notify('Consultando tempo e clima no local selecionado!', 'info');
    this.consultaTempoSevice
      .getWeather(this.cidadeAtiva)
      .subscribe((weather) => {
        let payload: any = weather;
        this.consulta.clima = payload.weather[0].description;
        this.consulta.temperaturaAtual = `${payload.main.temp} °C`;
        this.consulta.sensacaoTermica = `${payload.main.feels_like} °C`;
        this.consultas.push(this.consulta);
      });
  }
}
