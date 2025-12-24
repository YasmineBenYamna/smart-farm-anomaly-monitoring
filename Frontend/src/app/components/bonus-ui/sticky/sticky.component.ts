import { Component, ElementRef, OnInit } from '@angular/core';
import * as data from '../../../shared/data/bonus-ui/sticky';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

export interface Notes {
  id: number;
  isDeleted: boolean
}

@Component({
    selector: 'app-sticky',
    templateUrl: './sticky.component.html',
    styleUrls: ['./sticky.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class StickyComponent implements OnInit {
  
  public notes: Notes[] = data.sticky;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() { }

  //Add new sticky note
  addStickyNote() {
    this.notes.push({ id: this.notes.length + 1, isDeleted: false });
  };

  //Delete a particulr sticky note
  deleteNote(note: any) {
    note.isDeleted = true
  }
}
