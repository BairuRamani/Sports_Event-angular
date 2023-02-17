import { Component,OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {Event} from 'src/app/Models/Event';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {
  constructor(private eventservice:EventService) {}
  ngOnInit(): void {
    
  }
}


