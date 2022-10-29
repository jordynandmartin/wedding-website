import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private static MINUTE : number = 100;
  private timeout : any;
  public isLoading : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor() { }

  loading(){
    //this.timeout = setTimeout(() => {
      this.isLoading.next(true);
    //}, LoadingService.MINUTE)
  }

  notLoading(){
    this.isLoading.next(false);
    //clearTimeout(this.timeout);
  }
}
