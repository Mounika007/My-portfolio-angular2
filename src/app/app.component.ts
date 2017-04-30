import { Component } from '@angular/core';
import{ DetailsComponent} from './details/details.component';
import{ DetailsService} from './details/details.service';
import{ExperienceComponent} from './experience/experience.component';
import{ExperienceService} from './experience/experience.service';
import{ReferencesComponent} from './references/references.component';
import{ReferencesService} from './references/references.service';
@Component({
  selector: 'pm-app',
  template: `
  <div>
      <nav class='navbar navbar-default'>
  <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
         <ul class='nav navbar-nav'>
              <li><a [routerLink]="['/about']">About</a></li>
              <li><a [routerLink]="['/details']">My Details</a></li>
              <li><a [routerLink]="['/experiences']"> Experience </a></li>
              <li><a [routerLink]="['/references']"> References </a></li>
          </ul>
  </div>
         </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  </div>
     
  `,
  providers : [DetailsService,ExperienceService,ReferencesService]

})
export class AppComponent {
  pageTitle: String = ' Mounika Information';
}
