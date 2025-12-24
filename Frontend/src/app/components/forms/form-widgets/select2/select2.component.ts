import { Component, OnInit } from '@angular/core';
import { FullColorVariantComponent } from './full-color-variant/full-color-variant.component';
import { ColorVariantComponent } from './color-variant/color-variant.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-select2',
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.scss'],
    imports: [BreadcrumbComponent, NgSelectModule, FormsModule, ColorVariantComponent, FullColorVariantComponent]
})
export class Select2Component implements OnInit {
  selectedCity: any;
  selectedCityIds: string[];
  selectedCityIds2: string[];
  selectedCityIds3: string[];
  selectedCityIds4: string[];
  selectedCityIds5: string[];
  selectedCityIds6: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];

  store: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];

  Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];



  Placeh = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Enable(val : any){
    this.store = val;
  }
}
