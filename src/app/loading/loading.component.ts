import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading: Subject<Boolean>;

  constructor(private loadingService: LoadingService) { 
    this.isLoading = this.loadingService.isLoading;
  }

  ngOnInit(): void {
  }

}
