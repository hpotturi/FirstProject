import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginEmployee(){
    this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  login(loginForm: NgForm){
    console.log("login successfull");
    this.loginEmployee();

  }

  
    
  

}
