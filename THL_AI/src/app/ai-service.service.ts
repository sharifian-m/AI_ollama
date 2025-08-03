import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CommandRequest} from './models/command-request-model';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Injectable({
  providedIn: 'root'
})
export class AiServiceService {
  // private apiUrl = 'http://localhost:5294/api/gpt/interpret';
  // private apiUrl = '/api/gpt/interpret';
  private apiUrl = 'http://172.20.193.1:2021/api/gpt/interpret';
   headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  interpret(text: string) {
    console.log(text)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ command: string }>(this.apiUrl, {text},{headers})
  }
}
