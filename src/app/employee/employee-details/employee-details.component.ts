import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/common/services/employeeManagement.service';
import { EmployeeDetails } from 'src/app/common/modals/employee.modal';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [ `
  .parent_div_1,  {
    width: auto;
    height: auto;
    border: 1px solid red;
    margin-right: 10px;
    float: left;
  }
  .child_div_1 {
    float: left;
    margin-right: 5px;
    height:200px
  }
  .bgColor{
    background-color:bisque;
    border: 2px solid indianred;
    border-radius: 10px;
    width: 400px;
  }

  ` ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList: EmployeeDetails[];
  
  constructor(private employeeService: EmployeeService,){}

    ngOnInit(){
      this.employeeList = this.employeeService.getEmployeeModal();
      console.log(this.employeeList);
    }

}
