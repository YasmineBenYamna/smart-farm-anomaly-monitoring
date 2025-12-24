import { SearchWebsiteComponent } from './search-website.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: SearchWebsiteComponent,
    data: { animation: [routingAnimation]}
  }
];

