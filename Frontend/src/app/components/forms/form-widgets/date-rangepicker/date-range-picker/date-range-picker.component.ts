
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
    selector: 'app-date-range-picker',
    templateUrl: './date-range-picker.component.html',
    styleUrls: ['./date-range-picker.component.scss'],
    imports: [FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule]
})

export class DateRangePickerComponent {

  public selectedMoment = new Date();
  public selectedMoment2 = new FormControl(new Date());
  public selectedMoments = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];

}
