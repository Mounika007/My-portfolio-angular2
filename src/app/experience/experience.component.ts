import { Component, OnInit } from '@angular/core';
import{IExperiences} from './experiences';
import{ExperienceService} from './experience.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 
 public pageTitle: string = 'Experience';
   
        imageWidth: number = 30;
        imageMargin: number = 2;
        showImage: boolean = false;
        errorMessage: string;
        experiences :IExperiences[];
        
 toggleImage(): void{
     this.showImage= !this.showImage;
  }
  constructor(private _experienceService : ExperienceService) { }

  ngOnInit() {
     this. _experienceService.getExperiences()
    .subscribe(experiences => this.experiences  = experiences,
    error => this.errorMessage = <any>error);
   
  }

}
