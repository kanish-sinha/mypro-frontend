import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'addpost', component: AddpostComponent },
  { path: 'post', component: PostComponent },
  { path: 'chatroom', component: ChatRoomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
