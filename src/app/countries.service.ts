import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CountriesInterface} from './countries'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _url: string =`https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code`;
  
  constructor(private http: HttpClient) { }
  
  getCountries():Observable<CountriesInterface[]>{
    return this.http.get<CountriesInterface[]>(this._url).pipe(catchError(this.errorHandler));
  }  

  errorHandler(error: HttpErrorResponse){
      return throwError('Not Found');
  }
}
