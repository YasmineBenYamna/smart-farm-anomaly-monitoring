import { Component, OnInit } from '@angular/core';
import * as Tutorials from '../../../shared/data/knowledgebases/knowledgebases';
import { FeaturedTutorialsComponent } from '../../faq/featured-tutorials/featured-tutorials.component';
import { FaqTopPartComponent } from '../../faq/faq-top-part/faq-top-part.component';
import { HelpBoardComponent } from '../help-board/help-board.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-knowledgebase',
    templateUrl: './knowledgebase.component.html',
    styleUrls: ['./knowledgebase.component.scss'],
    imports: [BreadcrumbComponent, HelpBoardComponent, FaqTopPartComponent, FeaturedTutorialsComponent]
})
export class KnowledgebaseComponent implements OnInit {
  public featuredTutorials = Tutorials.featuredTutorials

  constructor() { }

  ngOnInit(): void {
  }

}
