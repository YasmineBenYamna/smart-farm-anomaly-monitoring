import { Component, OnInit } from '@angular/core';
import { PearlsStepStatesComponent } from './pearls-step-states/pearls-step-states.component';
import { PearlsStepSizingComponent } from './pearls-step-sizing/pearls-step-sizing.component';
import { PearlsStepIconComponent } from './pearls-step-icon/pearls-step-icon.component';
import { DefaultPearlsStepsComponent } from './default-pearls-steps/default-pearls-steps.component';
import { VerticalStepComponent } from './vertical-step/vertical-step.component';
import { StepSizingComponent } from './step-sizing/step-sizing.component';
import { StepStatesComponent } from './step-states/step-states.component';
import { StepIconComponent } from './step-icon/step-icon.component';
import { DefaultStepComponent } from './default-step/default-step.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
    imports: [BreadcrumbComponent, DefaultStepComponent, StepIconComponent,
        StepStatesComponent, StepSizingComponent, VerticalStepComponent,
        DefaultPearlsStepsComponent, PearlsStepIconComponent,
        PearlsStepSizingComponent, PearlsStepStatesComponent]
})
export class StepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
