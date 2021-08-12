import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  fnLogin()
  {
    //check 
    //success
   alert('logged in')
    localStorage.setItem("loggedUserName","jag");
    // this.ls.publish();
    
    this.router.navigateByUrl("[/menu]");    
  }
}
