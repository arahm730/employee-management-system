import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links = [
    { path: '/', displayText: 'Home' },
    { path: '/createEmployee', displayText: 'Create Employee' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
