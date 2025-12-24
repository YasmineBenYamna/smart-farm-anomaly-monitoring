import { Component, OnInit } from '@angular/core';
import * as Tutorials from '../../shared/data/knowledgebases/knowledgebases';

@Component({
    selector: 'app-knowledgebases',
    templateUrl: './knowledgebases.component.html',
    styleUrls: ['./knowledgebases.component.scss'],
    imports: [],
})
export class KnowledgebasesComponent implements OnInit {

  public featuredTutorials = Tutorials.featuredTutorials

  constructor() { }

  ngOnInit(): void {
  }

}
