import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AuthService} from './auth';
import {State} from '../../../app.state';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<State>, private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authenticated$
      .first()
      .map(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
          return false;
        }
        return true;
      });
  }
}
