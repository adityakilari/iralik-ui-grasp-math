import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidenavmenueitems } from './sidenavmenueitems';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  textHidden = false;

  toggleSidenav() {
   
    //this.sidenav.toggle(); // Toggle the side navigation state
    this.textHidden = !this.textHidden;
  }

  constructor() { }


  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
