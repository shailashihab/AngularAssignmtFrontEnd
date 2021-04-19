import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../mainpage/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  selectedUser : UserModel;
  constructor(private dataService:UserService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.router.snapshot.paramMap.get('id');
    this.dataService.getUser(id)
    .subscribe((user)=>{
      this.selectedUser=JSON.parse(JSON.stringify(user));
    })
  }
  update(){
    console.log("form submitted")
    this.dataService.updateUser(this.selectedUser);
    this.route.navigate(['/users',this.selectedUser._id])
  }
}
