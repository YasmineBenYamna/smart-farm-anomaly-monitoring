import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coming-simple',
    templateUrl: './coming-simple.component.html',
    styleUrls: ['./coming-simple.component.scss'],
    imports: [],
})
export class ComingSimpleComponent implements OnInit {
  seconds: number;
   countDate:any = new Date()
   

  constructor() {
    this.setTime();
    
  }
  
  setTime() {
    this.countDate.setDate(this.countDate.getDate() + 7)
    
    let d : any = this.countDate;
    setInterval(function(this: any){
      let countDown = new Date(d).getTime();
      let now = new Date().getTime();
      if(countDown - now < 0){
      }
      let distance = countDown - now ;
      this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }, this.seconds);
  }
  ngOnInit(): void {
  }

}
