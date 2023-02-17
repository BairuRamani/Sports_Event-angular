import { Component,OnInit } from '@angular/core';
import { Sport } from '../Models/Sport';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportlistComponent implements OnInit {
  slist:Sport[];
  constructor(private sportservice:SportService) {}
  ngOnInit(): void {
    this.sportservice.getsports().subscribe(
      data=>{
        this.slist=data;
      }
    )

    
  
  }

}
