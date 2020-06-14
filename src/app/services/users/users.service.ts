import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableUsers} from '../../interfaces/users-table.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(): Observable<TableUsers[]> {
    return this.http.get<TableUsers[]>('http://localhost:8080/users');
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
