import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.scss']
})
export class ReclamationListComponent implements OnInit {
  reclamation$: Observable<any>;
  constructor(private reclamationService:ReclamationService) { }
  columns = [{ prop: 'name' }, { name: 'message' }];

  ngOnInit() {

    this.reclamation$ = this.reclamationService.reclamationObs;
    this.reclamationService.GetReclamation();
  }

}
