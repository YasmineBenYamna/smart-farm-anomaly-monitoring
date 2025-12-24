import { Component, OnInit } from '@angular/core';
import * as categoriesData from '../../../shared/data/knowledgebases/knowledgebases'
import * as feather from 'feather-icons';
import { RouterLink } from '@angular/router';

import { FaqTopPartComponent } from '../../faq/faq-top-part/faq-top-part.component';
import { HelpBoardComponent } from '../help-board/help-board.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-knowledge-category',
    templateUrl: './knowledge-category.component.html',
    styleUrls: ['./knowledge-category.component.scss'],
    imports: [BreadcrumbComponent, HelpBoardComponent, FaqTopPartComponent, RouterLink]
})
export class KnowledgeCategoryComponent implements OnInit {

  public categories = categoriesData.categories
  constructor() { }

  ngOnInit(): void {
  }

}
