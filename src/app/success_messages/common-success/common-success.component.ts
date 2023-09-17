import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-common-success',
  templateUrl: './common-success.component.html',
  styleUrls: ['./common-success.component.scss']
})
export class CommonSuccessComponent {
  @ViewChild('stepper') stepper: MatStepper;

  msg1:string = "We received your request!"
  msg2:string = "we'll be in touch shortly!"
}
