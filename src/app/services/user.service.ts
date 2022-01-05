import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8000/user/'
  constructor(private http: HttpClient) { }
  getAllUser() {
    return this.http.get(this.url + 'alluser');
  }
  addUser(data: any) {
    return this.http.post(this.url + 'signup', data);
  }
}
