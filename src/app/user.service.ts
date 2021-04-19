import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './mainpage/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl='http://localhost:4000/users';

  constructor(private http:HttpClient) { }
  newUser(addedUser){
    // return this.http.post('/api/addNewBook',{'NewUser':addedUser})
    return this.http.post('http://localhost:4000/addNewUser',{'NewUser':addedUser})
  }
  getUsers(){
    const url=`${this.usersUrl}`
    return this.http.get(url);
  }
  getUser(id:String){
    const url=`${this.usersUrl}/${id}`;
    return this.http.get(url);
  }
  updateUser(singleUser){
    console.log(" Update at service");
    const id = singleUser._id;
    console.log(id);
    const url=`${this.usersUrl}/${id}`;
    console.log(url);
    return this.http.put(url,{'UserToEdit':singleUser})
    .subscribe((data)=>{
      console.log("After backend");
      console.log("Edited User"+data);})
  }
  deleteUser(singleUser:UserModel){
    console.log(singleUser);
    const id = singleUser._id;
    console.log(id);
    const url=`${this.usersUrl}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }
}
