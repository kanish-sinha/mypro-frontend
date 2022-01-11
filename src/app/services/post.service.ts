import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://mypro-backend.herokuapp.com/post/'
  constructor(private http: HttpClient) { }
  getAllPost() {
    return this.http.get(this.url);
  }
  addpost(data: any) {
    return this.http.post(this.url, data);
  }
  getPost(id: any) {
    return this.http.get(this.url + '/one/' + id)
  }
  patchPost(data: any, id: any) {
    return this.http.patch(this.url + 'update/' + id, data)
  }
}
