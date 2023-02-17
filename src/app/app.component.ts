import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm:FormGroup=new FormGroup({
    search:new FormControl('')
  })
  title = 'SportsEvent';
  user=false;
  admin=true;
}
