import { Component, OnInit } from '@angular/core';
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
  constructor(private userservice: UserService) {
  }

  ngOnInit(): void {
    // this.socket = io.connect(this.url);
    // this.socket.emit('discon', (data: any) => {
    //   console.log(data);
    // });
    this.userservice.getAllUser().subscribe(response => {
      this.userlist = response;
    })
  }

}
