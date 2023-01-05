import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css'],
})
export class EmployeeOverviewComponent {

  @Input()
  employee: Employee | undefined;

  constructor() {}

  ngOnInit(): void {}
}
