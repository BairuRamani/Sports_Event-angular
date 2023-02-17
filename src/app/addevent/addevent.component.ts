import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {Event} from 'src/app/Models/Event';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  e:Event={
    eventId:null,
    eventDate:new Date,
    eventName:"",
    noofSlots:null,
    sportsName:""
}
  message:string
    constructor(private eventservice:EventService) { }
    ngOnInit(): void {
    }
    save():void {

    }
  saveevent(data:any):void{
    this.eventservice.updateevent(data).subscribe(
      data=>{
        this.message="Event Added";
      }
    )
    console.log(data);
    console.log(this.e);
  }
  
}
