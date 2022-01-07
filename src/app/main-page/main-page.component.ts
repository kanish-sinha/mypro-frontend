import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as io from 'socket.io-client';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  url = 'http://localhost:8000'
  socket: any;
  userlist: any;
  sender: any
  constructor(private userservice: UserService, private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userservice.getAllUser().subscribe(response => { this.userlist = response; })
    this.route.queryParams.subscribe(response => { this.sender = response['_id'] })
  }
  chat(item: any) {
    this.router.navigate(['chatroom'], { queryParams: { _id: this.sender, chatroom: item._id } })
  }
}
