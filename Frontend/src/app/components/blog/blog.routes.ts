import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
    data: { animation: [routingAnimation] }

  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
    data: { animation: [routingAnimation] }

  },
  {
    path: 'add-post',
    component: AddPostComponent,
    data: { animation: [routingAnimation] }

  },
] as Routes;
