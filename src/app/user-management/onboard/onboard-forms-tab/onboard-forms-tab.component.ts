import { Employee } from '@/module/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BasicDetailsFormComponent } from '../basic-details-form/basic-details-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onboard-forms-tab',
  templateUrl: './onboard-forms-tab.component.html',
  styleUrls: ['./onboard-forms-tab.component.scss']
})
export class OnboardFormsTabComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild(BasicDetailsFormComponent) basicDetailsFormComponent: BasicDetailsFormComponent;

  oneForm: FormGroup;
  twoForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  selectedIndex: number;
  id: number;

  title = "AngularApp";
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    thirdFormGroup!: FormGroup;
    fourthFormGroup!: FormGroup;
    
    
  activeTab: string = 'basic-details-tab';
  employee: Employee = new Employee();

  // Method to handle tab changes
  setActiveTab(tabId: string) {
    alert(tabId)
    this.activeTab = tabId;
  }

  constructor(private readonly activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.selectedIndex = 0;
    this.activatedRoute.params.subscribe(async (params) => {
      this.id = +params?.id;
    });
  }

  ngAfterViewInit(): void {
    this.oneForm = this.basicDetailsFormComponent.form;
  }

  

}
