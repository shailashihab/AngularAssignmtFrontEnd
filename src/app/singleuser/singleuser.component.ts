import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../mainpage/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  singleUser:UserModel
  loader=true;
  constructor(private dataservice:UserService, private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.dataservice.getUser(id)
    .subscribe((user)=>{
      console.log(user)
      this.singleUser=JSON.parse(JSON.stringify(user));
      this.loader=false;
    })
  }
  update(singleUser){
    console.log(singleUser);
    this.route.navigate([`/users/${singleUser._id}/edituser`])
  }
  delete():void{
    this.dataservice.deleteUser(this.singleUser)
    .subscribe(result=>{alert("User Deleted")})
    this.route.navigate(['users']);
  }
}
