import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandInterpreterService {
  // private apiUrl = 'http://localhost:5294/api/gpt/interpret';
  // private apiUrl = 'http://172.20.193.1:2021/api/gpt/interpret';
   headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  interpret(text: string) {
    console.log(text)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ command: string }>(environment.apiUrl, {text},{headers})
  }
}
