import { Component,OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {Event} from 'src/app/Models/Event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit{
 message:string;
  elist:Event[];
  e:Event[];
  constructor(private eventservice:EventService) {}
  ngOnInit(): void {
    this.eventservice.getevents().subscribe(
      data=>{
        this.elist=data;
        
      }
    ) 
  }

clickMethod(event:Event) 
{
  if(confirm("Are you sure to delete "+event.eventName)) {
    this.eventservice.deleteevent(event.eventId).subscribe()
    {
    this.message="Product deleted Successfully";
    this.elist = this.elist.filter(item => item.eventId !=event.eventId);
    console.log(this.elist.length);
    }
  }
  }
}
