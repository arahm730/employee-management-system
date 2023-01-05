import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private URL: string = 'http://localhost:8080/api/v1/employees';
  private HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private HttpClient: HttpClient) {}

  createEmployee(employee: Employee): Observable<Employee> {
    return this.HttpClient.post<Employee>(`${this.URL}`, employee, {
      headers: this.HEADERS,
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(`${this.URL}`, {
      headers: this.HEADERS,
    });
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.HttpClient.get<Employee>(`${this.URL}/${id}`, {
      headers: this.HEADERS,
    });
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.HttpClient.put<Employee>(
      `${this.URL}/${employee.id}`,
      employee,
      {
        headers: this.HEADERS,
      }
    );
  }

  deleteEmployeeById(id: number): Observable<Employee> {
    return this.HttpClient.delete<Employee>(`${this.URL}/${id}`, {
      headers: this.HEADERS,
    });
  }
}
