import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationSubject = new BehaviorSubject<any[]>([]);
  usersSubject = new BehaviorSubject<any[]>([]);
  reclamationObs = this.reclamationSubject.asObservable();
  userObs = this.usersSubject.asObservable();
  constructor(private http:HttpClient) { }
  
  GetReclamation(){
    this.http.get<any[]>('http://botcmr.azurewebsites.net/api/reclamation').subscribe((res:any[]) => {
      this.reclamationSubject.next(res);
    })  
  }
  GetUsers(){
    this.http.get<any[]>('http://botcmr.azurewebsites.net/api/users').subscribe((res:any[]) => {
      this.usersSubject.next(res);
    })
  }
}
