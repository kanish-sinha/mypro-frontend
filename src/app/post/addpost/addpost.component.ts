import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required])
  })
  user: any = null;
  constructor(private route: ActivatedRoute, private router: Router, private postservice: PostService) {
  }
  get title() {
    return this.form.get('title');
  }
  get content() {
    return this.form.get('content');
  }
  get author() {
    return this.form.get('author');
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.user = response['_id'];
    })
  }
  add(f: any) {
    if (this.user === undefined) {
      this.router.navigate(['login']);
    }
    else {
      let post = f.value;
      post.posted_by = this.user;
      this.postservice.addpost(post).subscribe();
      this.router.navigate(['post'], { queryParams: { _id: this.user } });
    }
  }
}
