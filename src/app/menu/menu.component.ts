import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges, DoCheck {
  status:any;
  constructor(private ls:LoginService) { 
    this.status='Login';
  }
  ngDoCheck(): void {
    this.ls.checkLoginStatus().subscribe((data)=>{
      this.status=data;
    });
    // alert('docheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    alert('onchanges')
  }

  ngOnInit(): void {
      // alert('Menu:'+data);

    
  
  }

}
