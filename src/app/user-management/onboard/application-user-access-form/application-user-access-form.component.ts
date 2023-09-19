import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from'@angular/forms';
import { GenericValidator } from '@/validation/generic-validator';

@Component({
  selector: 'app-application-user-access-form',
  templateUrl: './application-user-access-form.component.html',
  styleUrls: ['./application-user-access-form.component.scss']
})
export class ApplicationUserAccessFormComponent implements OnInit{

  employee:Employee = new Employee()
  form: FormGroup;
  formBuilder: any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.form = this.formBuilder.group({
      checkbox: ['', [GenericValidator.checkbox]],
    })
  }
  
  // on_click_application_user_access_form(){

  // }

}
