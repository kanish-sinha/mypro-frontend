import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  post: any;
  userid: any;
  constructor(private postservice: PostService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(response => this.userid = response['_id'])
    this.postservice.getUserPost(this.userid).subscribe(response => this.post = response)
  }

  ngOnInit(): void {

  }
  postdetail(val: any) {
    this.router.navigate(['postdetail'], { queryParams: { _id: this.userid, postid: val._id } })
  }
  delete(val: any) {
    this.postservice.deletePost(val._id).subscribe();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
