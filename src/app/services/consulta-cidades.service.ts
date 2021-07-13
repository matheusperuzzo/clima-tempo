import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCidadesService {
  capitais: any[] = [
    { cidade: 'Aracaju', uf: 'SE' },
    { cidade: 'Belém', uf: 'PA' },
    { cidade: 'Belo Horizonte', uf: 'MG' },
    { cidade: 'Brasília', uf: 'DF' },
    { cidade: 'Boa Vista', uf: 'RR' },
    { cidade: 'Campo Grande', uf: 'MS' },
    { cidade: 'Cuiabá', uf: 'MT' },
    { cidade: 'Curitiba', uf: 'PR' },
    { cidade: 'Florianópolis', uf: 'SC' },
    { cidade: 'Fortaleza', uf: 'CE' },
    { cidade: 'Goiânia', uf: 'GO' },
    { cidade: 'João Pessoa', uf: 'PB' },
    { cidade: 'Macapá', uf: 'AP' },
    { cidade: 'Maceio', uf: 'AL' },
    { cidade: 'Manaus', uf: 'AM' },
    { cidade: 'Natal', uf: 'RN' },
    { cidade: 'Palmas', uf: 'TO' },
    { cidade: 'Porto Alegre', uf: 'RS' },
    { cidade: 'Porto Velho', uf: 'RO' },
    { cidade: 'Recife', uf: 'PE' },
    { cidade: 'Rio Branco', uf: 'AC' },
    { cidade: 'Rio De Janeiro', uf: 'RJ' },
    { cidade: 'Salvador', uf: 'BA' },
    { cidade: 'São Luís', uf: 'MA' },
    { cidade: 'São Paulo', uf: 'SP' },
    { cidade: 'Teresina', uf: 'PI' },
    { cidade: 'Vitória', uf: 'ES' },
  ];

  private urlLocalidade: string =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {}

  getUfs() {
    return this.http.get(`${this.urlLocalidade}?orderBy=nome`);
  }

  getCidadesByUf(uf: string) {
    return this.http.get(`${this.urlLocalidade}/${uf}/municipios?orderBy=nome`);
  }

  getCapitais() {
    return this.capitais;
  }
}
