import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contribution } from './contribution';
import { environment } from '../environments/environment';
import { ApiRoutes } from './constants/api-routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {
  private readonly baseUrl = environment.apiUrl;
  
  private http = inject(HttpClient);
  constructor() { }

  submitContribution(contribution: Contribution): Observable<Contribution> {
    return this.http.post<Contribution>(`${this.baseUrl}/${ApiRoutes.contributions}`, contribution);
  }
}
