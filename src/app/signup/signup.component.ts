import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fa = '';
  userlist: any;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required])
  })
  constructor(private userservice: UserService, private router: Router) { }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
  ngOnInit(): void {
    this.userservice.getAllUser().subscribe(response => {
      this.userlist = response
    })
  }
  register(f: any) {
    let user = f.value;
    if (user.password == user.confirmpassword) {
      for (var i = 0; i < this.userlist.length; i++) {
        if (user.email == this.userlist[i].email || user.username == this.userlist[i].username) {
          this.form.setErrors({ invalid: true })
          this.fa = 'User already registered'
          break;
        }
      }
      if (i >= this.userlist.length) {
        this.userservice.addUser(user).subscribe();
        this.router.navigate(['login'])
      }
    }
    else {
      this.form.setErrors({ invalid: true });
      this.fa = 'Password not matched';
    }
  }
}
