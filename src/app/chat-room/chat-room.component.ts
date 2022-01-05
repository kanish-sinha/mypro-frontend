import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  url = 'http://localhost:8000';
  socket: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.socket = io.connect(this.url)
    this.socket.on('message', (data: any) => {
      console.log(data);
    });
    this.route.queryParams
      .subscribe(params => {
        console.log(params['username'],params['room']);
      }
      );
  }

}
