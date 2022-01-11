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
  url: any = 'data:image/png;base64,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';
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
      post.image = this.url
      this.postservice.addpost(post).subscribe();
      this.router.navigate(['post'], { queryParams: { _id: this.user } }).then(() => {
        window.location.reload();
      })
    }
  }
  upload(val: any) {
    if (val.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(val.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result
      }
    }
  }
}
