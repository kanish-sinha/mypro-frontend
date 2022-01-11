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
  likeselected = false;
  dislikeselected = false;
  constructor(private route: ActivatedRoute, private postservice: PostService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => { this.post = response['postid'] })
    this.postservice.getPost(this.post).subscribe(response => { this.postdetail = response })
    this.postservice.getAllPost().subscribe(response => { this.relatedpost = response });
  }
  likeclick() {
    if (this.likeselected === true) {
      this.likeselected = !this.likeselected;
      this.postdetail[0].likes = this.postdetail[0].likes - 1
      this.postservice.patchPost(this.post, (this.postdetail[0])).subscribe();
    }
    else {
      this.likeselected = !this.likeselected;
      this.postdetail[0].likes = this.postdetail[0].likes + 1;
      this.postservice.patchPost(this.post, (this.postdetail[0])).subscribe();
    }
  }
  dislikeclick() {
    if (this.dislikeselected === false) {
      this.dislikeselected = !this.dislikeselected;
      this.postdetail[0].dislikes = this.postdetail[0].dislikes + 1
      this.postservice.patchPost(this.post, (this.postdetail[0])).subscribe();
    }
    else {
      this.dislikeselected = !this.dislikeselected;
      this.postdetail[0].dislikes = this.postdetail[0].dislikes - 1
      this.postservice.patchPost(this.post, (this.postdetail[0])).subscribe();
    }
  }
}
