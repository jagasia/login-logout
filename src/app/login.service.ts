import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  
  publish()
  {
    // alert('publish')
    this.checkLoginStatus();
  }

  checkLoginStatus()
  {    
    // alert('check login statyus')
    const myObservable=new Observable(observer=>{
      setTimeout(()=>{
        var status='Login';
        var loggedUserName=localStorage.getItem("loggedUserName");
        // alert(loggedUserName)
        if(loggedUserName!=null)
        {
          status='Logout';
          // alert('changing to Logout');
        } 
        observer.next(status);
      },100);
    });
    return myObservable;
  }
}
