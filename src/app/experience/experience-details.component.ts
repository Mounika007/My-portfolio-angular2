import { Component,OnInit, OnDestroy} from '@angular/core';
import {IExperiences}  from './experiences';
import{ActivatedRoute, Router} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { ExperienceService } from './experience.service';


@Component({
   
    templateUrl:'experience-details.component.html',

})
export class ExperienceDetailsComponent implements OnInit, OnDestroy{
    pageTitle: string= 'Position';
    experiences:IExperiences;
    
     errorMessage: string;
    private sub: Subscription;


constructor (private _route: ActivatedRoute,
                  private _router: Router, 
                  private _experienceService: ExperienceService)
                  //private _dataService: ExperienceService){
{
    }


ngOnInit(): void {
        this.sub = this._route.params.subscribe(
           params => {
                let id = +params['id'];
               this.getExperience(id);
               
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
// getdata(id:number) {
         //this._experienceService.getdata(id).subscribe(
           //  idata => this.idata  = idata,
            // error => this.errorMessage = <any>error);
   
  // }

  getExperience(id:number) {
        this._experienceService.getExperience(id).subscribe(
             experiences => this.experiences = experiences,
            error => this.errorMessage = <any>error);
    
  }
  

 onBack(): void{
        this._router.navigate(['/experiences']);
}
  
}


