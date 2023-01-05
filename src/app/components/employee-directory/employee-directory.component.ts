import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css'],
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: Employee[] = [];
  private subscription!: Subscription;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.subscription = this.employeeService
      .getEmployees()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
}
