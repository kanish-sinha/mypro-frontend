import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  post: any;
  user: any;
  postdetail: any;
  relatedpost: any;
  likeselected = false;
  dislikeselected = false;
  constructor(private route: ActivatedRoute, private postservice: PostService,
    private userservice: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.post = response['postid'];
      this.user = response['_id']
    })
    this.postservice.getPost(this.post).subscribe(response => { this.postdetail = response })
    this.postservice.getAllPost().subscribe(response => { this.relatedpost = response });
    this.userservice.getUser(this.user).subscribe(response => this.user = response)
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
  comment(ite: any, commsg: any) {
    let msg = commsg.value;
    commsg.value = '';
    let i = ite.comment.length
    let use = {
      user: this.user,
      com: msg
    }
    ite.comment.push(use);
    console.log(this.postdetail[0]);
    this.postservice.patchPost(this.post, this.postdetail[0]).subscribe();
  }
}
