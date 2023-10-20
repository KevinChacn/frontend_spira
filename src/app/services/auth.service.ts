import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      console.log('No estás logueado');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
