import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DetailsGuard implements CanActivate {
  
  constructor(private _router: Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       let id = +route.url[1].path;
   if(isNaN(id) || id < 1){
      alert('Invalid Product Id');
      //start a new navigation to redirect to list page
      this._router.navigate(['/details']);
      //abort current navigation
      return false;
   };
    return true;
  }
}
