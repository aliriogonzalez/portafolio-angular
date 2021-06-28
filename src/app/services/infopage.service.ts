import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage, InfoTeam } from '../interfaces/info_page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {
  info: InfoPage = {};
  team: any[] = [];
  loaded_data = false;
  loaded_data_team = false;

  constructor( private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }
    //console.log("Service Info");

    
  private loadInfo(){
    this.http.get("assets/data/data_page.json",{responseType:"json"})
      .subscribe((resp:InfoPage) =>{
      this.loaded_data=true;
      this.info=resp;
      console.log(this.info.email);
    })
  }
  private loadTeam(){
    this.http.get("https://angular-html-697df-default-rtdb.firebaseio.com/equipo.json",{responseType:"json"})
      .subscribe((respTeam:any)=>{
        this.loaded_data_team=true;
        this.team = respTeam;
        console.log(this.team);
      })
  }
}
