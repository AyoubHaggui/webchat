import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$:Observable<any>; 
  constructor(private reclamationService:ReclamationService) { }
  columns = [{ prop: 'name' }, { name: 'message' }];
  ngOnInit(): void {
    this.users$ = this.reclamationService.userObs;
    this.reclamationService.GetUsers();
  }

}
