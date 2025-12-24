import { FeatherIcoComponent } from './feather-ico/feather-ico.component';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThimifyIconComponent } from './thimify-icon/thimify-icon.component';
import { WhetherIconComponent } from './whether-icon/whether-icon.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'flag-icon',
    component: FlagIconComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'fontawesome-icon',
    component: FontawesomeIconComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'ico-icon',
    component: IcoIconComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'thimify-icon',
    component: ThimifyIconComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'feather-icon',
    component: FeatherIcoComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'whether-icon',
    component: WhetherIconComponent,
    data: { animation: [routingAnimation] }
  },
]

