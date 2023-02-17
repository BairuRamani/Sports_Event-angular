import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Sport} from 'src/app/Models/Sport';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  slist:any;
  
  url:string="https://localhost:7225/api/Sport";
  

  constructor(private httpclient:HttpClient) {}
  getsports():Observable<Sport[]>{
    this.slist=this.httpclient.get(this.url);
    return this.slist;
}  

getSportByName(name:string):Observable<Sport>
  {
    this.slist=this.httpclient.get<Sport>(this.url+"/SportByName?name="+name)
    return this.slist;
  }
}


