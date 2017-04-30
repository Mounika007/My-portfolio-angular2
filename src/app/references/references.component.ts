import { Component, OnInit } from '@angular/core';
import{Ireferences} from './references';
import{ ReferencesService} from'./references.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
   pageTitle: string ='References Details';
       errorMessage: string;
        references:Ireferences[];



  constructor(private _referencesService : ReferencesService) { }

  ngOnInit(){
     this. _referencesService.getReferences()
    .subscribe(references => this.references  = references,
    error => this.errorMessage = <any>error);
  }

}

