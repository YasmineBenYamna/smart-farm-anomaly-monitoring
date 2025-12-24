import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-accounts',
    templateUrl: './user-accounts.component.html',
    styleUrls: ['./user-accounts.component.scss'],
    imports: [NgbCollapse]
})
export class UserAccountsComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;

 
  constructor() { }

  ngOnInit(): void {
  }

}
