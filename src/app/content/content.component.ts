import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
  }
UserName:string;

  logout(){
    localStorage.setItem('LoginStatus', 'false');
    localStorage.clear();
    window.location.reload();
  }

}