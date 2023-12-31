import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  loginUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000' + '/login', user);
  }


}
