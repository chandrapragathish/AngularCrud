import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../ShareEmployee/employee';
import { EmployeeService } from '../ShareEmployee/employee.service';

@Component({
  selector: 'app-employee-lists',
  templateUrl: './employee-lists.component.html',
  styleUrls: ['./employee-lists.component.css']
})
export class EmployeeListsComponent implements OnInit {

  constructor(public employeeservice: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeservice.GetEmployee();
  }
  editEmployee(emp: Employee) {
    this.employeeservice.SelectedEmployee = Object.assign({}, emp);
  }
  OnDelete(id:number){
    if(confirm("Do you want to delete this")==true){
      this.employeeservice.DeleteEmployee(id).subscribe(x=>{
        this.employeeservice.GetEmployee();
      })
    }
  }

}
