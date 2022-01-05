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
  username: any;
  room: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.socket = io.connect(this.url);
    this.route.queryParams
      .subscribe(params => {
        this.username = params['username']
        this.room = params['chatroom']
      });
    this.socket.emit('room', this.username, this.room);
    this.socket.on('user-joined', (name: any) => {
      console.log(name);
    })
    // const myvideo = document.createElement('audio');
    // myvideo.muted = true;
    // navigator.mediaDevices.getUserMedia({
    //   audio: true
    // }).then(stream => {
    //   this.addVideoStream(myvideo, stream);
    // })
  }
  // addVideoStream(video: any, stream: any) {
  //   video.srcObject = stream;
  //   document.body?.appendChild(video);
  // }
}
