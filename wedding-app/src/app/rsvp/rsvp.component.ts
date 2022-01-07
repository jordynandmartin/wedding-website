import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  public rsvpSubmitted: boolean = false;
  
  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {

  }

  submit() : void {
    this.rsvpSubmitted = true;
  }

}
