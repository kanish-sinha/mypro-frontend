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
    this.route.queryParams.subscribe(params => {
      this.username = params['_id']
      this.room = params['chatroom']
    });
    this.socket.on('recieve', (data: any) => {
      // let div = document.getElementById('box')
      // const msgelement = document.createElement('div');
      // msgelement.className = 'chat-message-left pb-4 flex-shrink-1 rounded py-2 px-3 mr-3'
      // msgelement.style.display = 'flex';
      // msgelement.style.marginRight = 'auto';
      // msgelement.style.flexShrink = '0'
      // msgelement.style.marginBottom = '2%'
      // msgelement.style.backgroundColor = 'blanchedalmond'
      // msgelement.textContent = data
      // div?.appendChild(msgelement);
    })
  }
  chat(val: any) {
    // let msg = val.value;
    // let div = document.getElementById('box')
    // val.value = "";
    // let msgelement = document.createElement('div');
    // msgelement.className = 'flex-shrink-1 rounded py-2 px-3 mr-3'
    // msgelement.style.display = 'flex';
    // msgelement.style.flexDirection = 'row-reverse'
    // msgelement.style.marginLeft = 'auto';
    // msgelement.style.flexShrink = '0'
    // msgelement.style.marginBottom = '2%';
    // msgelement.style.backgroundColor = 'cadetblue'
    // msgelement.textContent = msg
    // div?.appendChild(msgelement);
    // this.socket.emit('message', { sender: this.username, chatroom: this.room, message: msg })
  }
  call() {
    console.log('call from a user')
  }
}
