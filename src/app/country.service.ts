import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CountryInterface} from './countries'


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountry(urlPath):Observable<CountryInterface>{
    return this.http.get<CountryInterface>(urlPath).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError('Not Found');
}

}

  
    

