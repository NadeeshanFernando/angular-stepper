import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-user-access-form',
  templateUrl: './application-user-access-form.component.html',
  styleUrls: ['./application-user-access-form.component.scss']
})
export class ApplicationUserAccessFormComponent implements OnInit{

  employee:Employee = new Employee()

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  on_click_application_user_access_form(){

  }

}
