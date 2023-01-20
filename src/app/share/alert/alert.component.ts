import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() type: string;
  cssClass: string[] = ['alert', 'alert-dismissible','fade'];

  ngOnInit(): void {
    const alertTypeClass = {
      success: 'alert-succes',
      danger:'alert-danger',
      info:'alert-info',
      warning:'alert-warning'
    };
    this.cssClass.push(alertTypeClass[this.type]);
  }
   
  removeAlert() {
    this.cssClass = ['alert-hide'];
  }

}
