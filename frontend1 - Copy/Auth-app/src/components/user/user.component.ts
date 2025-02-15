import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userList: any[] = [];
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http:HttpClient){}

  getUser(){

    this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe((result) => {
      this.userList = result;  // result is typed as any[], so it matches userList's type
    });
  }

  onSubmit() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    console.log("Submitted Data:", newUser);
  } 

}
