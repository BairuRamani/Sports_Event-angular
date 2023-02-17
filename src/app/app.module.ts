import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { AddeventComponent } from './addevent/addevent.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { FormsModule } from '@angular/forms';
import { SportlistComponent } from './sportlist/sportlist.component';
import { EventbynameComponent } from './eventbyname/eventbyname.component';
import { SportbynameComponent } from './sportbyname/sportbyname.component';

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    AddeventComponent,
    DeleteeventComponent,
    SportlistComponent,
    EventbynameComponent,
    SportbynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
