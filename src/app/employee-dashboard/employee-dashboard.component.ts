import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  

  ngOnInit(){
    this.getEmployees();
  }

  public employees: Employee[] = [];
  constructor(private employeeService: EmployeeService){
    
  }

  public getEmployees(): void{
    this.employeeService.getEmployees()
    .subscribe({
      next:(response: Employee[]) => 
        (this.employees = response),
      
      error: (error:HttpErrorResponse) => 
        alert(error.message)
      
      
  });
  }
  
}
