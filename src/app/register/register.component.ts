import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="Welcome Users"
  acno=""
  pwd=""
  uname="Type username here"
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert("Register clicked")
  }

}
