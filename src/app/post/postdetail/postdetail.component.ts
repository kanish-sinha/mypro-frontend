import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  post: any;
  postdetail: any;
  relatedpost: any;
  constructor(private route: ActivatedRoute, private postservice: PostService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => { this.post = response['postid'] })
    this.postservice.getPost(this.post).subscribe(response => { this.postdetail = response })
    this.postservice.getAllPost().subscribe(response => { this.relatedpost = response });
  }

}
