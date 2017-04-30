import { Component, OnInit } from '@angular/core';
import{ IDetails} from './details';
import{ DetailsService} from './details.service';

@Component({
  
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
        pageTitle: string ='Education Details';
        imageWidth: number = 30;
        imageMargin: number = 2;
        showImage: boolean = false;
        errorMessage: string;
        details:IDetails[];


   
 
  toggleImage(): void{
     this.showImage= !this.showImage;
  }
	
  constructor(private _detailService : DetailsService) {

   }

  ngOnInit() :void {
    this. _detailService.getDetails()
    .subscribe(details => this.details  = details,
    error => this.errorMessage = <any>error);
  }

}
