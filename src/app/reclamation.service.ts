import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  GetUsers() {
    this.http.get('http://botcmr.azurewebsites.net/api/users').subscribe((res:any) => {
      this.userSubject.next(res);
    }) 
  }

  reclamationSubject = new BehaviorSubject<any[]>([]);
  reclamationObs = this.reclamationSubject.asObservable();
  userSubject = new BehaviorSubject<any[]>([]);
  userObs = this.userSubject.asObservable();

  constructor(private http:HttpClient) { }

  GetReclamation(){
    this.http.get('http://botcmr.azurewebsites.net/api/reclamation').subscribe((res:any) => {
      this.reclamationSubject.next(res);
    })  
  }
  Get
}
