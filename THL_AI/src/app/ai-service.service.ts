import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CommandRequest} from './models/command-request-model';

@Injectable({
  providedIn: 'root'
})
export class AiServiceService {
  private apiUrl = 'http://localhost:5294/api/gpt';

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(`${this.apiUrl}/hello`, { responseType: 'text' });
  }

  // interpretCommand(request: CommandRequest): Observable<{ command: string }> {
  //   return this.http.post<{ command: string }>(`${this.apiUrl}/interpret`, request);
  // }

  interpret(text: string) {
    return this.http.post<{ command: string }>('http://localhost:5294/api/gpt/interpret', { text });
  }
  // بعدا میایم و متدهای بیشتری می‌سازیم برای ارسال prompt به backend
}
