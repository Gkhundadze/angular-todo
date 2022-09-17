import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  apiPath:string = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks'
  constructor(private http: HttpClient) { }
  
  getApiData():Observable<any> {
    return this.http.get(this.apiPath)
  }
}
