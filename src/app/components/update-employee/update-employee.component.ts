import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const stringId = this.route.snapshot.paramMap.get('id');

    if (stringId !== null) {
      const id = parseInt(stringId);
      this.employeeService.getEmployeeById(id).subscribe({
        next: (employee: Employee) => {
          this.employee = employee;
        },
      });
    }
  }

  updateEmployee(): void {
    if (this.employee !== undefined) {
      console.log(this.employee);
      this.employeeService
        .updateEmployee(this.employee)
        .subscribe((employee: Employee) => {
          this.router.navigate(['/']);
        });
    }
  }
}
