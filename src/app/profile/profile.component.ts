import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  post: any;
  userid: any;
  constructor(private postservice: PostService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(response => this.userid = response['_id'])
    this.postservice.getUserPost(this.userid).subscribe(response => this.post = response)
  }

  ngOnInit(): void {

  }
  postdetail(val: any) {

  }
}
