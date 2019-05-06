import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
	selector: 'app-profiles',
	templateUrl: './profiles.component.html',
	styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

	title = 'mostStarredGet';
	page: number = 1;
	profiles = [];

		ngOnInit() {
		this.getProfiles(this.page);
	}
	constructor (private profilesService: ProfilesService){}
		getProfiles(page: number) {
    // instead of moving the result to the lis of profiles we will call onsucces method
    //the result as a parameter
    this.profilesService.getProfileInfo(page).subscribe((res) => this.onSuccess(res) );
  }

 
  onSuccess(res) {
    //we add each result to the list
    if (res != undefined) {
      res.items.forEach(item => {
        this.profiles.push(item);
      });
    }
  }

  onScroll()
  {
    console.log("Scrolled");
    this.page = this.page + 1;
    this.getProfiles(this.page);
  }



}
