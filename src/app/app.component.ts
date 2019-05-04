import { Component, OnInit} from '@angular/core';
import { ProfilesService } from './services/profiles.service';
//declare const myTest : any;
function myTest() {
    //alert('Welcome to custom js');
//document.getElementById("myP").innerHTML = "Hello Dolly.";
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/*$(function() {
    alert('Hello, custom js');
});*/   							//use `npm i @types/jquery`
export class AppComponent {
	
	title = 'mostStarredGet';
 	
  profiles1=[];
  profiles2=[];
  constructor(private profilesService: ProfilesService){

    
  	this.profilesService.getProfileInfo().subscribe(([profiles1, profiles2]) => {
  	//subscribe to get information update 
  	this.profiles1 = profiles1;//page 1
  	this.profiles2 = profiles2;// page 2
  	//...
  	}); 
  	  
 }
  	
}
