import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../ShareEmployee/employee';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SelectedEmployee: Employee;
  EmployeeLists: Employee[];
  readonly rootURL = "http://localhost:1026/api";
  constructor(private http: HttpClient) {

  }
  PostEmployees(emplo: Employee) {
  debugger
    return this.http.post(this.rootURL + '/Employee', emplo);
  }
  putEmployees(id,emplo : Employee){
    return this.http.put(this.rootURL+'/Employee/'+emplo.EmployeeID,emplo);
     
   }
  GetEmployee() {
    // this.http.get(this.rootURL + '/Employees').map((data: Response) => {
    //   return data.json as Employee[];
    // }).toPromise().then(x => {
    //   this.EmployeeLists = x;
    // })
    this.http.get(this.rootURL+'/Employee')
    .toPromise().then(res => this.EmployeeLists = res as Employee[]);
  }
  DeleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/Employee/'+id);
   }
}
