import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Plot {
    id: number;
    farm: number;
    plot_name: string;
    crop_variety: string;
    size?: number;
    created_at: string;
}

export interface Farm {
  id: number;
  owner: number;
  owner_username: string;
  location: string;
  size: number;
  farm_name: string;
  plots_count?: number;
  created_at: string;
}


@Injectable({ providedIn: 'root' })
export class FarmService {
    private apiUrl = 'http://localhost:8000/api';
    constructor(private http: HttpClient) {}
     getDecodedToken(): any | null {
  const token = localStorage.getItem('access_token');
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

   getAllFarms(): Observable<Farm[]> {
    return this.http
      .get<{ results: Farm[] } | Farm[]>(`${this.apiUrl}/farms/`)
      .pipe(
        map((response: { results: Farm[] } | Farm[]) => {
          // Check if response is paginated
          if (response && 'results' in response) {
            return response.results;
          }
          // Otherwise it's already an array
          return response as Farm[];
        })
      );
  }
getPlotsByFarmId(farmId?: number): Observable<Plot[]> {
  let url = `${this.apiUrl}/plots/`;

  if (farmId) {
    url += `?farm=${farmId}`;
  }

  return this.http.get<Plot[]>(url);
}




}
