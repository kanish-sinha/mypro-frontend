import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  user: any;
  expToken: any; tokendetail: any;
  condition = false
  constructor(private postservice: PostService, private route: ActivatedRoute,
    private router: Router, private jwtHelper: JwtHelperService, private userservice: UserService) {
    this.postservice.getAllPost().subscribe(response => { this.post = response })
    this.expToken = localStorage.getItem('token');
    if (this.expToken != null || this.expToken != undefined) {
      this.tokendetail = this.jwtHelper.decodeToken(this.expToken)
      if (this.tokendetail._id)
        this.router.navigate(['post'], { queryParams: { _id: this.tokendetail._id } })
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(response => { this.user = response['_id'] })
  }
  add() {
    this.router.navigate(['addpost'], { queryParams: { _id: this.user } });
  }
  postdetail(item: any) {
    this.router.navigate(['postdetail'], { queryParams: { _id: this.user, postid: item._id } })
  }
}
