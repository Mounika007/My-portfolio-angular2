import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule}  from '@angular/router'; 

import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';

import{ DetailsService} from './details/details.service';
import{ ExperienceService} from './experience/experience.service';
import{ReferencesService} from './references/references.service';


import{ DetailListComponent} from './details/details-list.component';
import{DetailsGuard} from  './details/details-guard.guard';
import{ExperiencesGuard} from './experience/experiences.guard';

import { ExperienceComponent } from './experience/experience.component';
import{ExperienceDetailsComponent} from './experience/experience-details.component';
import { ReferencesComponent } from './references/references.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailListComponent,
    WelcomeComponent,
    ExperienceComponent,
    ExperienceDetailsComponent,
    ReferencesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot([
     {path: 'details', component: DetailsComponent},
     {path:'detail/:id', canActivate:[DetailsGuard],component: DetailListComponent},
     {path:'about',component: WelcomeComponent},
     {path: 'experiences', component: ExperienceComponent },
     {path:'experience/:id', canActivate:[ExperiencesGuard], component: ExperienceDetailsComponent},
     {path: 'references', component: ReferencesComponent },
     {path:'',redirectTo:'',pathMatch:'full'},
      {path:'**',redirectTo:'',pathMatch:'full'}
     
   ])
   
  ],
  providers: [DetailsService,DetailsGuard,ExperienceService,ReferencesService,ExperiencesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
