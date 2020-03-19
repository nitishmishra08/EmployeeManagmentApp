import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../modals/employee.modal';


@Injectable({providedIn:'root'})
export class EmployeeService {

  employeeDetails : EmployeeDetails[] = [];

  constructor(private http: HttpClient) {
  }
  getEmployeeModal(){
    return this.employeeDetails;
  }
  getEmployee(EmpId){
    let emp: EmployeeDetails;
    this.employeeDetails.map(val=>{
      if(val.EmpId == EmpId) emp = val;
    });
    return emp;
  }
  employeeEdit(emp){
    let isPresent: Boolean = false;
    this.employeeDetails.map((val, index)=>{
      if(val.EmpId == emp.EmpId) 
      {
        this.employeeDetails[index] = emp;
        isPresent=true
      }
    });
    return isPresent;

  }

}

