import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) { }

  getCountry(){
  let baseUrl = environment.countryUrl
    return this.http.get(baseUrl)
  }

  postCountry(url,data){
    let baseUrl = environment.countryUrl + url
    return this.http.post(baseUrl,data)
  }
  getState(){
    let baseUrl = environment.stateUrl 
      return this.http.get(baseUrl)
    }
  
  postState(data){
      let baseUrl = environment.stateUrl 
      return this.http.post(baseUrl,data)
  }
  getCities(url){
    let baseUrl = environment.citiesUrl + url
      return this.http.get(baseUrl)
    }
  
  postCities(url,data){
      let baseUrl = environment.citiesUrl + url
      return this.http.post(baseUrl,data)
  }
  getFlag(url){
    let baseUrl = environment.flagUrl + url
      return this.http.get(baseUrl)
    }
  
  postFlag(url,data){
      let baseUrl = environment.flagUrl + url
      return this.http.post(baseUrl,data)
  }

  
}