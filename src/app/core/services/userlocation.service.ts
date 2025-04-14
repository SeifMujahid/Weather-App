import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserlocationService {
  constructor(private _HttpClient: HttpClient) {}

  getUserCity(): Observable<any> {
    return this._HttpClient.get(`https://ipinfo.io/json`);
  }
}
