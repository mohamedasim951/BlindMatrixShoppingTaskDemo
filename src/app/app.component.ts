import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService} from './common.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'shoppingcart';
  constructor(public commonService:CommonService,private route:Router){}
  ngOnInit(): void {
    this.commonService.LoginStatus = localStorage.getItem('LoginStatus');
  }
}
