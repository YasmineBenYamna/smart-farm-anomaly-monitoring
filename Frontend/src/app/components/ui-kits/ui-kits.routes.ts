import { Routes } from '@angular/router';
import { AccordingComponent } from './according/according.component';
import { AlertComponent } from './alert/alert.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { HelpersClassesComponent } from './helpers-classes/helpers-classes.component';
import { ListsComponent } from './lists/lists.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';

import { BootstrapTabsComponent } from './tabs/bootstrap-tabs/bootstrap-tabs.component';
import { LineTabsComponent } from './tabs/line-tabs/line-tabs.component';
import { TagAndPillsComponent } from './tag-and-pills/tag-and-pills.component';
import { ToasterComponent } from './toaster/toaster.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypographyComponent } from './typography/typography.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'according',
    component: AccordingComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'alert',
    component: AlertComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'avatars',
    component: AvatarsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'grid',
    component: GridComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'helpers-classes',
    component: HelpersClassesComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'lists',
    component: ListsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'popover',
    component: PopoverComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'progress',
    component: ProgressComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'spinners',
    component: SpinnersComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'according',
    component: AccordingComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'tabs',
    children: [
      {
        path: 'bootstrap-tabs',
        component: BootstrapTabsComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'line-tabs',
        component: LineTabsComponent,
        data: { animation: [routingAnimation] }
      }
    ]
  },
  {
    path: 'tag-and-pills',
    component: TagAndPillsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'toaster',
    component: ToasterComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'typography',
    component: TypographyComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;

