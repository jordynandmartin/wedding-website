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
  public dataLoaded : boolean = false;

  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {
    this.parties = [];
    this.dataLoaded = false;
    this.guestService.getGuests().subscribe(
      (response: Party[]) => {
        this.parties = response;
        
        if(this.parties.length > 0){
          this.totalGuests = this.parties
                                .map((party : Party) => party.guestNumber)
                                .reduce((previous : number, current:number) => previous + current);
        }
        this.dataLoaded = true;
      },
      (error) => {
        this.dataLoaded = true;
        console.log(error);
      }
    );
  }

}
