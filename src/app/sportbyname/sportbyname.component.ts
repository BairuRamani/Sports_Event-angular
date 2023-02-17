import { Component,OnInit } from '@angular/core';
import { Sport } from '../Models/Sport';
import { SportService } from '../sport.service';


@Component({
  selector: 'app-sportbyname',
  templateUrl: './sportbyname.component.html',
  styleUrls: ['./sportbyname.component.css']
})
export class SportbynameComponent implements OnInit{
  sportname=""
  s:Sport={
    sportsId:null,
    sportsType:"",
    noOfPlayers:null,
    sportsName:""
  }
  constructor(private sportservice:SportService) {}
  ngOnInit(): void {

  }
  getSportByName()
  {
    this.sportservice.getSportByName(this.sportname).subscribe(
      data=>{
        this.s=data;
        console.log(this.s);
      }
    )
  }

  
}
