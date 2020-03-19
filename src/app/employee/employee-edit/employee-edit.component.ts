import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/common/services/employeeManagement.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetails } from 'src/app/common/modals/employee.modal';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styles: [ `
  a:link, a:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  
  a:hover, a:active {
    background-color: grey;
  }
  

  ` ]
  
})
export class EmployeeEditComponent implements OnInit {
  employee: EmployeeDetails;
  
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.employee = this.employeeService.getEmployee(param.EmpId);
          
        }
      })
      
    }

    
      
    

}
