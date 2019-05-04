import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { forkJoin } from 'rxjs';  // RxJS 6 syntax
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
const today = new Date();
@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  private year= today.getFullYear();//this year
  private month = ("0" + (today.getMonth())).slice(-2);//this is last month
  private day = ("0" + (today.getDate())).slice(-2);//today's day
  
  
  // 
  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	console.log("Last month is "+ (this.year) + "-" + (this.month) + "-" + (this.day));
  	 
  }
  
  getProfileInfo(): Observable<any>{
    //page 1
    let x=this.http.get("https://api.github.com/search/repositories?q=created:>" + this.year + "-" + this.month + "-" + this.day + "&sort=stars&order=desc&page=1") 
    map(res => res);
    //page 2
    let y=this.http.get("https://api.github.com/search/repositories?q=created:>" + this.year + "-" + this.month + "-" + this.day + "&sort=stars&order=desc&page=2")
    map(res => res);
    return forkJoin([x,y]);
}

}
