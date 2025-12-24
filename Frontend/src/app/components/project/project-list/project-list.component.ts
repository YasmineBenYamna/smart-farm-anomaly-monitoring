import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { FarmService,Plot } from '../../../services/farm.service'; 
import { ActivatedRoute } from '@angular/router'; 
@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    imports: [BreadcrumbComponent, CommonModule, RouterLink,]
})
export class ProjectListComponent implements OnInit {
  public openTab : string = "All";
   plots: Plot[] = [];
   filterData: Plot[] = [];
   selectedFarmId: number | undefined;
  
  constructor(private farmService: FarmService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    // ✅ Read query params
    this.route.queryParams.subscribe(params => {
      this.selectedFarmId = params['farm'] ? +params['farm'] : undefined;
      this.loadPlots();
    });
  }

  // ✅ NEW METHOD: Load plots based on farm ID
  loadPlots(): void {
    this.farmService.getPlotsByFarmId(this.selectedFarmId).subscribe({
      next: (data: any) => {
        this.plots = Array.isArray(data) ? data : data.results;
        this.filterData = this.plots;
        console.log('Plots loaded for farm:', this.selectedFarmId, this.plots);
      },
      error: (err) => console.error('Failed to load plots', err)
    });
  }
 
  tabbed(val: string) {
    this.openTab = val;

    if (val === 'All') {
      this.filterData = this.plots;
    } else {
      this.filterData = this.plots.filter(
        plot => plot.crop_variety.toLowerCase() === val.toLowerCase()
      );
    }
  }
}