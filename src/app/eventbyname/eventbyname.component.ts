import { Component ,OnInit} from '@angular/core';
import {Event} from 'src/app/Models/Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventbyname',
  templateUrl: './eventbyname.component.html',
  styleUrls: ['./eventbyname.component.css']
})
export class EventbynameComponent implements OnInit{
  
  eventname="";
  e:Event={
    eventId:null,
    eventDate:new Date,
    eventName:"",
    noofSlots:null,
    sportsName:""
}

  constructor(private eventservice:EventService) {}

  ngOnInit(): void {
    
  }

  getEventByName()
  {
    this.eventservice.getEventByName(this.eventname).subscribe(
      data=>{
          this.e=data;
          console.log(this.e);
      }
    );
  }
}
