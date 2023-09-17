import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-support-form',
  templateUrl: './other-support-form.component.html',
  styleUrls: ['./other-support-form.component.scss']
})
export class OtherSupportFormComponent implements OnInit{

  employee:Employee = new Employee()
  
  ngOnInit() {
  }

  on_click_other_support_form(){
    alert(this.employee.first_name+", "+this.employee.air_watch)
  }

}
