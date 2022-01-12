import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './post/postdetail/postdetail.component';
import { ProfileComponent } from './profile/profile.component';
import { LogguardGuard } from './services/logguard.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'addpost', component: AddpostComponent, canActivate: [LogguardGuard] },
  { path: 'postdetail', component: PostdetailComponent, canActivate: [LogguardGuard] },
  { path: 'post', component: PostComponent },
  { path: 'chatroom', component: ChatRoomComponent, canActivate: [LogguardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chat', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LogguardGuard] },
  { path: '', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
