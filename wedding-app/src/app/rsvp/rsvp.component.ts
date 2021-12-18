import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
import { Guest } from '../guest';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  public guests : Guest[] = [];

  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {

    this.guestService.getGuests().subscribe(
      (response)  => { this.guests = response; }
      ); 
  }

}
