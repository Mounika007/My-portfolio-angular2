import { Injectable } from '@angular/core';
import{IExperiences} from './experiences';
import{ Http , Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ExperienceService {
  private _experiencesUrl = 'api/experiences/details.json';
  
  constructor(private _http: Http){

  }

getExperiences() : Observable<IExperiences[]>{
  return this._http.get(this._experiencesUrl)
  .map((response: Response) => <IExperiences[]> response.json())
  .do(data => console.log('All:' +JSON.stringify(data)))
   .catch(this.handleError);


}
 getExperience(id: number): Observable<IExperiences> {
       return this.getExperiences()
            .map((experiences: IExperiences[]) => experiences.find(p => p.experienceId === id));
 }
  
 //  getData() : Observable<Idata[]>{
 // return this._http.get(this._dataUrl)
 // .map((response: Response) => <Idata[]> response.json())
// .do(data => console.log('All:' +JSON.stringify(data)))
  // .catch(this.handleError);

//}


 private handleError(error: Response) {

console.error(error);
return Observable.throw (error.json().error|| 'Server error');


}

  

}
