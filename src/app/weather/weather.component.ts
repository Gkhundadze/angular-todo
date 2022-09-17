import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  defaultCity:string = 'Tbilisi';
  weatherData:any
  constructor(private WeatherApiService: WeatherApiService) { }
public cityName: string = ''
public iconUrl: string = ''
public updatedTime: string = ''
public countryName: string = ''
// public cityName: string = ''
  ngOnInit(): void {
    this.WeatherApiService.getApiData(this.defaultCity).subscribe((res) => {
      this.weatherData = res
      this.cityName = this.weatherData.location.name
      this.iconUrl = this.weatherData.current.condition.icon
      this.updatedTime = this.weatherData.current.last_updated
      this.countryName = this.weatherData.location.country
    })
  }
  onInputChange(event:any) {
    this.defaultCity = event.target.value
    
  }
  onSubmit (requestedCity:string) {
    this.defaultCity = requestedCity
    this.WeatherApiService.getApiData(this.defaultCity).subscribe((res) => {
      this.weatherData = res
      this.cityName = this.weatherData.location.name
      this.iconUrl = this.weatherData.current.condition.icon
      this.updatedTime = this.weatherData.current.last_updated
      this.countryName = this.weatherData.location.country
    })
    
  }
}
