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
  public loading: boolean = false;
  public totalGuests: number = 0;

  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.guestService.getGuests().subscribe(
      (response: Party[]) => {
        this.loading = false;
        console.log(response);

        this.parties = response;

        this.totalGuests = this.parties
                                .map((party : Party) => party.guestNumber)
                                .reduce((previous : number, current:number) => previous + current);
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }

}
