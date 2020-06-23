import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private _mode:DarkmodeService) { }

public darkMode;
 activateDarkMode(){
  if(sessionStorage.getItem('mode')==='dark'){
    this.darkMode=false;
    sessionStorage.setItem('mode','light');
  }
  else{
    this.darkMode=true;
   sessionStorage.setItem('mode','dark');
  }
}

  ngOnInit(): void {
      this.darkMode=this._mode.getModeStatus();
  }

}
