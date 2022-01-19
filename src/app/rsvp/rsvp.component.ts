import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GuestService } from '../guest.service';
import { Party } from '../party';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  private numberOnlyRegex = new RegExp('^[0-9]+$');

  public rsvpSubmitted: boolean = false;
  public party: Party = new Party();
  public errorOccured : boolean = false;
  public loading : boolean = false;

  public rsvpForm : FormGroup = new FormGroup({
    guestNumber: new FormControl('', [Validators.required, 
      Validators.pattern(this.numberOnlyRegex)]),

    guestNames: new FormControl('', [Validators.required])
  });

  constructor(private guestService: GuestService ) { }

  ngOnInit(): void {

  }

  get guestNames(): any{
    return this.rsvpForm.get("guestNames");
  }

  get guestNumber(): any{
    return this.rsvpForm.get("guestNumber");
  }

  submit() : void {
      if(this.rsvpForm.valid){
        this.loading = true;
        this.party.guestNumber = parseInt(this.guestNumber.value);
        this.party.guestNames = this.guestNames.value;

        this.guestService.addGuests(this.party).subscribe(
          (response : any) => {
            this.loading = false;
            this.rsvpSubmitted = true;
            console.log(response);
          },
          (error) => {
            this.loading = false;
            this.errorOccured = true;
            console.log(error);
          }
        );
      }
  }


}
