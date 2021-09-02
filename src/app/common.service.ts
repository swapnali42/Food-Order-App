import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl: any = environment.baseURL;
  baseUrl1: any = environment.baseURL1;
  public products: any = [];
  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
      .pipe(catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(error.message || "Server Error")
  }

  addUser(data: any) {
    return this.http.post(this.baseUrl, data);
  }
  
  getFood():Observable<any> {
    return this.http.get<any>(this.baseUrl1)
    .pipe(catchError(this.handleError))
  }


}
