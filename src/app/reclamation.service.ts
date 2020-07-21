import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationSubject = new BehaviorSubject<any[]>([]);
  reclamationObs = this.reclamationSubject.asObservable();
  constructor(private http:HttpClient) { }
  reclamation = of([
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    },
    {
      fullName:"morched marzouk",
      message:"Par la présente, je viens vous adresser ma réclamation concernant (précisez l'objet de votre réclamation)."
    }
  ])
  GetReclamation(){
    this.http.get('http://botcmr.azurewebsites.net/api/reclamation').subscribe((res:any) => {
      this.reclamationSubject.next(res);
    })  
  }
}
