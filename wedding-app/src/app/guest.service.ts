import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Party } from './party';

@Injectable({
  providedIn: 'root'
})

export class GuestService {
	
  private baseUrl: string = "https://quiet-plains-44094.herokuapp.com";
	
  constructor(private client: HttpClient) { }
  
  
  
  addGuests(party : Party) : Observable<any>{
	  
	  let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json');
	  
	  
	  return this.client.post(this.baseUrl + "/guests", party, {headers: httpHeaders, responseType: "text"});
  } 
  
  
  
  
}
