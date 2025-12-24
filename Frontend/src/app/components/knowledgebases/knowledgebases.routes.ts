import { Routes } from '@angular/router';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { KnowledgeDetailComponent } from './knowledge-detail/knowledge-detail.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'knowledgebase',
    component: KnowledgebaseComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'knowledge-category',
    component: KnowledgeCategoryComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'knowledge-detail',
    component: KnowledgeDetailComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;
