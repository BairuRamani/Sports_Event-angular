import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { EventbynameComponent } from './eventbyname/eventbyname.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { SportbynameComponent } from './sportbyname/sportbyname.component';
import { SportlistComponent } from './sportlist/sportlist.component';

const routes: Routes = [
  {path:'eventlist',component:EventlistComponent},
  {path:'addevent',component:AddeventComponent},
  {path:'deleteevent',component:DeleteeventComponent},
  {path:'sportlist',component:SportlistComponent},
  {path:'eventbyname', component:EventbynameComponent},
  {path:'sportbyname', component:SportbynameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
