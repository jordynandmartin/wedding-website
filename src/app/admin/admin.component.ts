import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
import { Party } from '../party';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public parties : Party[] = [];
  public totalGuests: number = 0;

  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {
    this.guestService.getGuests().subscribe(
      (response: Party[]) => {
        console.log(response);

        this.parties = response;

        this.totalGuests = this.parties
                                .map((party : Party) => party.guestNumber)
                                .reduce((previous : number, current:number) => previous + current);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
