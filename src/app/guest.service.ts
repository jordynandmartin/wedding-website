import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Party } from './party';

@Injectable({
  providedIn: 'root'
})

export class GuestService {
	
  private baseUrl: string = "https://weddingrsvp-api.herokuapp.com";
	
  constructor(private client: HttpClient) { }
  
  getGuests() : Observable<any> {
    return this.client.get(this.baseUrl + "/guests");
  }
  
  addGuests(party : Party) : Observable<any>{
	  
	  let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json');
	  
	  
	  return this.client.post(this.baseUrl + "/addGuests", 
    party, 
    {
      headers: httpHeaders, 
      responseType: 'text'
    });
  } 
  
  
  
  
}
