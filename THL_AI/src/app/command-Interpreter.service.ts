import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandInterpreterService {
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  interpret(userCommand: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<{ command: string }>(environment.apiUrl, {userCommand}, {headers})
  }
}
