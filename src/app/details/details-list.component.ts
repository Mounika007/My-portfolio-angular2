import { Component,OnInit, OnDestroy} from '@angular/core';
import {IDetails}  from './details';
import{ActivatedRoute, Router} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { DetailsService } from './details.service';
@Component({
   
    templateUrl:'details-list.component.html'
})
export class DetailListComponent implements OnInit, OnDestroy{
    pageTitle: string= 'Detail List';
    details:IDetails;
     errorMessage: string;
    private sub: Subscription;


constructor (private _route: ActivatedRoute,
                  private _router: Router, 
                  private _detailService: DetailsService){

    }



    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getDetail(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

  getDetail(id:number) {
        this._detailService.getDetail(id).subscribe(
            details => this.details = details,
            error => this.errorMessage = <any>error);
    
  }

 onBack(): void{
        this._router.navigate(['/details']);
}
  
}


