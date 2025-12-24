import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';


@Component({
    selector: 'app-alert-icon-inverse',
    templateUrl: './alert-icon-inverse.component.html',
    styleUrls: ['./alert-icon-inverse.component.scss'],
    imports: [FeatherIconComponent]
})
export class AlertIconInverseComponent implements OnInit {

  constructor() { }
  deleteMsg(id: any){
    this.data.map((elem,i)=>{elem.id == id && this.data.splice(i,1) })
  }

  data = [
    {
      id: 1,
      icon: "clock",
      color: "primary"
    },
    {
      id: 2,
      icon: "heart",
      color: "secondary"
    },
    {
      id: 3,
      icon: "thumbs-up",
      color: "success"
    },
    {
      id: 4,
      icon: "help-circle",
      color: "info"
    },
    {
      id: 5,
      icon: "bell",
      color: "warning"
    },
    {
      id: 6,
      icon: "thumbs-down",
      color: "danger"
    },
    {
      id: 7,
      icon: "alert-triangle",
      color: "light"
    },
    {
      id: 8,
      icon: "alert-circle",
      color: "dark"
    },
  ]
  ngOnInit(): void {
  }

}
