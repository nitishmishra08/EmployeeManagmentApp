import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeaddComponent } from './employee/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './common/services/employeeManagement.service';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from "ngx-avatar";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeaddComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AvatarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
