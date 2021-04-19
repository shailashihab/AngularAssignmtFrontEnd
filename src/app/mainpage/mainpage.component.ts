import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  users:UserModel[];
  loader=true;

  constructor(private dataServ:UserService, private route:Router) { }

  ngOnInit(): void {
    this.dataServ.getUsers()
    .subscribe((apiData)=>{
      this.users=JSON.parse(JSON.stringify(apiData));
      this.loader=false;
    })
  }
  SingleUser(user){
    this.route.navigate(['/users',user._id])
  }
}
