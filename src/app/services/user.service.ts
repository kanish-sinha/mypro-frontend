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
  getUser(data: any) {
    return this.http.get(this.url + 'one/' + data);
  }
  addUser(data: any) {
    return this.http.post(this.url + 'signup', data);
  }
  loginUser(data: any) {
    return this.http.post(this.url + 'login', data)
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
