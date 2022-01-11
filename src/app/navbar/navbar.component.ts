import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  expToken: any;
  tokendetail: any
  constructor(private jwtHelper: JwtHelperService, private router: Router,
    public userservice: UserService) {
    this.expToken = localStorage.getItem('token');
    if (this.expToken != null || this.expToken != undefined) {
      this.tokendetail = this.jwtHelper.decodeToken(this.expToken)
    }
  }
  ngOnInit(): void {
  }
  chat() {
    if (this.expToken != null || this.expToken != undefined)
      this.router.navigate(['chat'], { queryParams: { _id: this.tokendetail._id } })
    else
      this.router.navigate(['login'])
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
  profile() {
    if (this.expToken != null || this.expToken != undefined)
      this.router.navigate(['profile'], { queryParams: { _id: this.tokendetail._id } })
    else
      this.router.navigate(['login']);
  }
}
