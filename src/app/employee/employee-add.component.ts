import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../common/services/employeeManagement.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-add.component.html',
  styles: [ `
   
  input{
    width:30%;
    height:auto;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  ` ]
  
})
export class EmployeeaddComponent implements OnInit {

  employeeManagementForm: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.employeeManagementForm = new FormGroup({
      name: new FormControl(''),
      EmpId: new FormControl(''),
      companyName: new FormControl(''),
      emailId: new FormControl(''),
      contactNo: new FormControl(''),
      designation: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.EmpId){
          let employee = this.employeeService.getEmployee(param.EmpId);
          console.log("my value",employee);
          if(employee){
            this.employeeManagementForm.setValue(employee);
            this.isEdit = true;
            }
          else this.router.navigate(['/employee'])
        }
      })
  }

  resetForm(){
    console.log('reset',this.employeeManagementForm)
    this.employeeManagementForm.reset();
  }

  add(){
    if(this.employeeManagementForm.valid){
      this.employeeService.employeeDetails.push(this.employeeManagementForm.value);
      this.resetForm();
    }
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.employeeManagementForm.valid){
      if(this.employeeService.employeeEdit(this.employeeManagementForm.value)){
        this.router.navigate(['/employee'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }

}
