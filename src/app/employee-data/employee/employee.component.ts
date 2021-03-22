import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../ShareEmployee/employee';
import { EmployeeService } from '../ShareEmployee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.resetButton();
  }
  resetButton(form?: NgForm) {
    if (form != null) form.reset();
    this.employeeservice.SelectedEmployee = {
      EmployeeID: null,
      EmployeeName: '',
      EmployeeCode: '',
      EmployeeTP: '',
      EmployeeEmail: ''
    }

  }
  onSubmit(form?: NgForm) {
    if (form.value.EmployeeID == null) {
      this.employeeservice.PostEmployees(form.value).subscribe(data => {
        this.resetButton(form);
        this.employeeservice.GetEmployee();
      });
    } else {
      this.employeeservice.putEmployees(form.value.EmployeeID, form.value).subscribe(data => {
        this.resetButton(form);
        this.employeeservice.GetEmployee();
      });
    }
  }
}
