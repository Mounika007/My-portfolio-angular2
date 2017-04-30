import { Injectable } from '@angular/core';
import{Ireferences} from './references';
import{ Http , Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReferencesService {
   private _referencesUrl = 'api/references/references.json';
  constructor(private _http: Http){

   }
   getReferences() : Observable<Ireferences[]>{
  return this._http.get(this._referencesUrl)
  .map((response: Response) => <Ireferences[]> response.json())
  .do(data => console.log('All:' +JSON.stringify(data)))
   .catch(this.handleError);

}

private handleError(error: Response) {

console.error(error);
return Observable.throw (error.json().error|| 'Server error');


}


}
