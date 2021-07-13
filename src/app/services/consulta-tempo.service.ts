import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultaTempoService {
  private url: string = 'http://api.openweathermap.org';
  private myToken: string = '22f563e71b5031c725e90fc5f0e408c0';

  constructor(private http: HttpClient) {}

  getWeather(cidade: string) {
    return this.http.get(
      `${this.url}/data/2.5/weather?q=${cidade}&appid=${this.myToken}&units=metric&lang=pt_br`
    );
  }
}
