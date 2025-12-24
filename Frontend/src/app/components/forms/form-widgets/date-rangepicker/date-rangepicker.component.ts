import { Component } from '@angular/core';
import { OwlDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { InputInitiallyEmptyComponent } from './input-initially-empty/input-initially-empty.component';

@Component({
    selector: 'app-date-rangepicker',
    templateUrl: './date-rangepicker.component.html',
    styleUrls: ['./date-rangepicker.component.scss'],
    imports: [BreadcrumbComponent, DateRangePickerComponent, OwlDateTimeModule, InputInitiallyEmptyComponent]
})

export class DateRangepickerComponent {

}
