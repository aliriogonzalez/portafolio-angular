import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info_page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {
  info: InfoPage = {};
  loaded_data = false;
  constructor( private http: HttpClient) { 
    //console.log("Service Info");

    this.http.get("assets/data/data_page.json",{responseType:"json"})
    .subscribe((resp:InfoPage) =>{
      this.loaded_data=true;
      this.info=resp;
      console.log(this.info.email);
    })
  }
}
