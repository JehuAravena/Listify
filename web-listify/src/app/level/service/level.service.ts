import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllLevels } from 'src/app/shared/config/endpoints/endpoints';
import { Level } from '../interface/level-interface';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private urlGetAllLevels = getAllLevels;

  constructor(private http: HttpClient) {}

  public getAllLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.urlGetAllLevels);
  }
}
