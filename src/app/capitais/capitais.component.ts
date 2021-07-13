import { ConsultaTempoService } from './../services/consulta-tempo.service';
import { Capitais } from './../models/capitais';
import { ConsultaCidadesService } from './../services/consulta-cidades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import { DxDataGridComponent } from 'devextreme-angular';
import 'jspdf-autotable';

@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css'],
})
export class CapitaisComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  cidades: Capitais[] = [];

  constructor(
    private cidadeService: ConsultaCidadesService,
    private tempoService: ConsultaTempoService
  ) {}

  ngOnInit(): void {
    let lista = this.cidadeService.getCapitais();
    for (let cidade = 0; cidade < lista.length; cidade++) {
      const element = lista[cidade];
      let capital = new Capitais();
      capital.localidade = `${element.cidade} - ${element.uf}`;
      this.tempoService.getWeather(element.cidade).subscribe((consulta) => {
        let payload: any = consulta;
        capital.clima = payload.weather[0].description;
        capital.temperaturaAtual = `${payload.main.temp} °C`;
        capital.sensacaoTermica = `${payload.main.feels_like} °C`;
        this.cidades.push(capital);
      });
    }
  }

  exportGridToPdf(e: any) {
    console.log(e);
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance,
    }).then(() => {
      doc.save('Capitais.pdf');
    });
  }
}
