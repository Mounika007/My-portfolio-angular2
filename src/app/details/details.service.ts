import { Injectable } from '@angular/core';
import{IDetails} from './details';
import{ Http , Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class DetailsService {
  private _detailsUrl = 'api/details/education.json';
  constructor(private _http: Http){

 
 }

getDetails() : Observable<IDetails[]>{
  return this._http.get(this._detailsUrl)
  .map((response: Response) => <IDetails[]> response.json())
  .do(data => console.log('All:' +JSON.stringify(data)))
   .catch(this.handleError);

}

 getDetail(id: number): Observable<IDetails> {
        return this.getDetails()
            .map((details: IDetails[]) => details.find(p => p.detailId === id));
    }

private handleError(error: Response) {

console.error(error);
return Observable.throw (error.json().error|| 'Server error');


}


}

