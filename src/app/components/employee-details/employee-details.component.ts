import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employee: Employee | undefined;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId) {
      const id = parseInt(stringId);
      this.employeeService.getEmployeeById(id).subscribe({
        next: (employee: Employee) => {
          this.employee = employee;
        },
      });
    }
  }

  deleteEmployee() {
    if (this.employee !== undefined) {
      this.employeeService.deleteEmployeeById(this.employee.id).subscribe({
        next: (employee: Employee) => this.router.navigate(['/']),
      });
    }
  }
}
