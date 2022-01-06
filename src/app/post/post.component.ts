import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  user: any;
  constructor(private postservice: PostService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.postservice.getAllPost().subscribe(response => { this.post = response })
    this.route.queryParams.subscribe(response => { this.user = response['_id'] })
  }
}
