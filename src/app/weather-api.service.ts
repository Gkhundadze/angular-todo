import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }
  apiKey : string = '2c2f2097f1da4f65ba3113355221609'
  airQuality: string = 'no'
  baseUrl: string = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&aqi=${this.airQuality}`

  getApiData(city:string):Observable<{}> {
    return this.http.get(this.baseUrl + '&q=' + city)
  }
}
