import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protegida-page',
  templateUrl: './protegida-page.component.html',
  styleUrls: ['./protegida-page.component.css']
})
export class ProtegidaPageComponent implements OnInit {

  public profile: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }

  }

}
