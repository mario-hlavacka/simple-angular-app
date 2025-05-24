import { inject, Injectable } from '@angular/core';
import { Shelter } from './shelter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRoutes } from '../constants/api-routes';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  private readonly baseUrl = environment.apiUrl;

  private http = inject(HttpClient);
  constructor() { }

  getShelters(): Observable<Shelter[]> {
    return this.http.get<Shelter[]>(`${this.baseUrl}/${ApiRoutes.shelters}`);
  }

  getShelterById(shelterId: number): Observable<Shelter> {
    return this.http.get<Shelter>(`${this.baseUrl}/${ApiRoutes.shelters}/${shelterId}`);
  }
}
