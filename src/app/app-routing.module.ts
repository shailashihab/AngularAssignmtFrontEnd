import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SingleuserComponent } from './singleuser/singleuser.component';

const routes: Routes = [
  {path:"",component:MainpageComponent},
  {path:"users",component:MainpageComponent},
  {path:"addusers",component:AdduserComponent},
  {path:"users/:id",component:SingleuserComponent},
  {path:"users/:id/edituser",component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
