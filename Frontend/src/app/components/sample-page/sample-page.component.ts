import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DecodedToken {
  user_id: number;
  username: string;
  role: 'admin' | 'farmer';
  is_staff: boolean;
  is_superuser: boolean;
  exp: number;
}

@Component({
    selector: 'app-sample-page',
    templateUrl: './sample-page.component.html',
    styleUrls: ['./sample-page.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class SamplePageComponent implements OnInit {
  username: string = '';
  role: string = '';
  isAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user: DecodedToken = JSON.parse(userStr);
      this.username = user.username;
      this.role = user.role;
      this.isAdmin = user.role === 'admin';
    }
  }
}