import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employee: any = null;
  private baseUrl = '';

  constructor() { }
}
