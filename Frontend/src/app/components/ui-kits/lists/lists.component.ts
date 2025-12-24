import { Component, OnInit } from '@angular/core';
import { WithImagesRoundedComponent } from './with-images-rouded/with-images-rounded.component';
import { WithImagesComponent } from './with-images/with-images.component';
import { JavascriptBehaviorComponent } from './javascript-behavior/javascript-behavior.component';
import { CustomContentComponent } from './custom-content/custom-content.component';
import { WithIconComponent } from './with-icon/with-icon.component';
import { ContextualClassesComponent } from './contextual-classes/contextual-classes.component';
import { FlushStyleComponent } from './flush-style/flush-style.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { DefaultListComponent } from './default-list/default-list.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
    imports: [BreadcrumbComponent, DefaultListComponent, LinkButtonComponent,
        FlushStyleComponent, ContextualClassesComponent, WithIconComponent,
        CustomContentComponent, JavascriptBehaviorComponent, WithImagesComponent,
        WithImagesRoundedComponent]
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
