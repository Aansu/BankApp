import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to SBI Bank"
  //acNumber = "Account Number Please!!!!"
  acno = "Account Number Please!!!!"
  pwd = "Password Please"

  users: any = {
    1000: { acno: 1000, username: "Aansu", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "Nirupama", password: "usertwo", balance: 501 },
    1002: { acno: 1002, username: "Jacob", password: "userthree", balance: 5001 },
    1003: { acno: 1003, username: "Ashok", password: "userfour", balance: 5000 },
    1004: { acno: 1004, username: "Philip", password: "userfive", balance: 500 }

  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // accNumber(event: any) {
  //   // console.log(event.target.value)
  //   this.acno = event.target.value
  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  // }

  login() {
    var acno = this.acno;
    var pswd = this.pwd;
    let accDetails = this.users;
    if (acno in accDetails){
      if (pswd == accDetails[acno]["password"]) {
        alert("Successfully loggedin")
        this.router.navigateByUrl("dashboard")
      }else{
        alert("Incorrect Password")
      }
    } else {
      alert("Invalid account number")
    }
    alert("login clicked")
  }

}
