import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { GenericValidator } from "@/validation/generic-validator";

@Component({
  selector: 'app-other-support-form',
  templateUrl: './other-support-form.component.html',
  styleUrls: ['./other-support-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class OtherSupportFormComponent implements OnInit{

  employee:Employee = new Employee()
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      any_other: ['', [GenericValidator.any_other]],

    });
  
  }

  // on_click_other_support_form(){
  //   alert(this.employee.first_name+", "+this.employee.air_watch)
  // }

}
