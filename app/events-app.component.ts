import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `,
  directives: [EventsListComponent, NavBarComponent],
  providers: [EventService, ToastrService]
})
export class EventsAppComponent {
  constructor() {}
  
}