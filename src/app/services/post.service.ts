import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:8000/post'
  constructor(private http: HttpClient) { }
  getAllPost() {
    return this.http.get(this.url);
  }
  addpost(data: any) {
    return this.http.post(this.url, data);
  }
}
