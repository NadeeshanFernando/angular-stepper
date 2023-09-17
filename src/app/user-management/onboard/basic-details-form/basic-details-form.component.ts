import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { GenericValidator } from "@/validation/generic-validator";

@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class BasicDetailsFormComponent implements OnInit{
  employee: Employee = new Employee();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      epf_no: ['', [GenericValidator.common]],
      company: ['', [GenericValidator.common]],
      branch: ['', [GenericValidator.common]],
      department: ['', [GenericValidator.common]],
      designation: ['', [GenericValidator.common]],
      grade: ['', [GenericValidator.common]],
      date_of_joining: ['', [GenericValidator.common]],
      hod_name: ['', [GenericValidator.common]],
      epf_no_of_hod: ['', [GenericValidator.common]],
    });
  }

}
