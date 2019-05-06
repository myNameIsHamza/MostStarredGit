import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const today = new Date();
@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  private year= today.getFullYear();//this year
  private month = ("0" + (today.getMonth())).slice(-2);//this is last month
  private day = ("0" + (today.getDate())).slice(-2);//today's day
  private page = 1;
  //
  constructor(private http:HttpClient) {
  	console.log("service is now ready!");
  	console.log("Last month is "+ (this.year) + "-" + (this.month) + "-" + (this.day));

  }

  getProfileInfo(page : number): Observable<any>{
    //page 1
    return this.http.get("https://api.github.com/search/repositories?q=created:>" + this.year + "-" + this.month + "-" + this.day + "&sort=stars&order=desc&page="+page)
}

}
