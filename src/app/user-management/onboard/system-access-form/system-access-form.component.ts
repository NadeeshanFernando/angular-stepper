import { Employee } from '@/module/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-access-form',
  templateUrl: './system-access-form.component.html',
  styleUrls: ['./system-access-form.component.scss']
})
export class SystemAccessFormComponent implements OnInit{

  employee:Employee = new Employee()

  ngOnInit() {
    
  }

  on_click_system_access_form(){
    alert(this.employee.avc)
  }
}
