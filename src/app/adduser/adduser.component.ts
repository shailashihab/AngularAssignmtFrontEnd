import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../mainpage/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
addingUser=new UserModel(null,null,null,null,null);
  constructor(private dataservice:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  addedUser(){
    
      console.log("AddBook form submission")
      this.dataservice.newUser(this.addingUser)
      .subscribe((result)=>{
        alert(result);
        console.log(result);
      })
      const that = this;
      setTimeout(function(){
        console.log('timeout');
        that.route.navigate(['']);
      },2000) 
    
  }

}
