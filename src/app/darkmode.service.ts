import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }
  
  getModeStatus(){
    if(sessionStorage.getItem('mode')==='dark')
    {
      return true;
    }
    else{
      return false; 
    }
  }

}