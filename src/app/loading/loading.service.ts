import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor() { }

  loading(){
    this.isLoading.next(true);
  }

  notLoading(){
    this.isLoading.next(false);
  }
}
