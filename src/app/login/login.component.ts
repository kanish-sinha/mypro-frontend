import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlist: any
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private userservice: UserService, private router: Router) { }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password')
  }
  ngOnInit(): void {
    this.userservice.getAllUser().subscribe(response => {
      this.userlist = response;
    })
  }
  submit(f: any) {
    let data = f.value;
    for (var i = 0; i < this.userlist.length; i++) {
      if (this.userlist[i].email == data.email) {
        if (this.userlist[i].password == data.password) {
          localStorage.setItem('token', 'kanish');
          this.router.navigate([''], { queryParams: { username: this.userlist[i].username } })
        }
        else
          this.form.setErrors({ invalid: true });
        break;
      }
    }
    if (i >= this.userlist.length)
      this.form.setErrors({ invalid: true });
  }
}
