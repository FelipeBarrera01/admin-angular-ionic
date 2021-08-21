import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Body, ResponseDenario } from '../interfaces/denario.interface';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {


  private endPoint = "https://pruebas.tecnologiadenario.com.co/api/abaco/allproducts";

  public response: Body[] = [];
  public itemSelected: Body = {};
  constructor(private http: HttpClient) {
    this.getItems();
   }

  getItems (): void{
    const headers = {
      Authorization: "AutDenarioPru2021"
    }
     this.http.get<ResponseDenario>(this.endPoint, {headers: new HttpHeaders(headers)} ).subscribe(res => {
   
      this.response =  res.body.map(i => {
        i.UrlFotos = i.UrlFotos?.split("Merka_SSTEC")
        return i;
      })

      
    })
  }

  selectItem(item: Body):void{
    this.itemSelected = item;
  }
  resetItem ():void{
    this.itemSelected = {};
  }
}
