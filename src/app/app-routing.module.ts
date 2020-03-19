import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeaddComponent } from './employee/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';


const routes: Routes = [
  { path: 'employee-add', component: EmployeeaddComponent},
  { path: 'employee/:EmpId',      component: EmployeeEditComponent },
  {
    path: 'employee',component: EmployeeDetailsComponent
    
  },
  { path: 'employee-add/:EmpId', component: EmployeeaddComponent },
  {
    path: 'employee',component: EmployeeDetailsComponent
    
  },
  { path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
