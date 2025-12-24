import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../interface/product-list';
// import * as projectData from '../../../shared/data/components/project/project-list'
export interface FarmProfile {
  id: number;
  owner: number;
  location: string;
  size: number;
  farm_name?: string;
}
export interface FieldPlot {
  id: number;
  farm: FarmProfile;
  plot_name: string;
  crop_variety: string;
  size?: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  listUser: Project[] | undefined;

  constructor(private http:HttpClient) { }

}
