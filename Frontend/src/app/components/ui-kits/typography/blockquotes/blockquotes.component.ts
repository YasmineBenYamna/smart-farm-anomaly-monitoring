import { Component, OnInit } from '@angular/core';
import * as typographyData from '../../../../shared/data/typography/typography'


@Component({
    selector: 'app-blockquotes',
    templateUrl: './blockquotes.component.html',
    styleUrls: ['./blockquotes.component.scss'],
    imports: []
})
export class BlockquotesComponent implements OnInit {

  public blockquotes = typographyData.blockquotes

  constructor() { }

  ngOnInit(): void {
  }

}
