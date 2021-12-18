import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})

export class GuestService {
	
  private baseUrl: string = "https://quiet-plains-44094.herokuapp.com";
	
  constructor(private client: HttpClient) { }
  
  getGuests() : Observable<Guest[]>{
	  return this.client.get<Guest[]>(this.baseUrl + '/guests');
  }
  
  
  addGuests(guests : Guest[]) : Observable<any>{
	  
	  let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json');
	  
	  
	  return this.client.post(this.baseUrl + "/guests", guests, {headers: httpHeaders, responseType: "text"});
  } 
  
  
  
  
}
