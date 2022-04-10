import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/lazy-loaded/models/character';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private informationSubject: BehaviorSubject<string[]> = new BehaviorSubject(['Hello']);
  constructor(private http: HttpClient) { }

  getInformation(): Observable<any> {
    return this.informationSubject.asObservable();
  }

  setInformation(information: string[]): void {
      return this.informationSubject.next(information);
  }

  getMeAMorty(): Observable<Character> {
    const url = 'https://rickandmortyapi.com/api/character/2';
    return this.http.get<Character>(url);
  }
}
