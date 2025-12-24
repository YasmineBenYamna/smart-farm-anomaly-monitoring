import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatherIconComponent } from '../../../feather-icon/feather-icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [AngularSvgIconModule, FeatherIconComponent]
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }
  
  checkout(){
    this.router.navigateByUrl('/checkout');
  }
  ngOnInit(): void {
  }


}
