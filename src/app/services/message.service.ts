import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url = 'https://mypro-backend.herokuapp.com/msg/'
  constructor(private http: HttpClient) { }
  getMsg(sender: any, receiver: any) {
    return this.http.get(this.url + 'msg/' + sender + '/' + receiver);
  }
}
