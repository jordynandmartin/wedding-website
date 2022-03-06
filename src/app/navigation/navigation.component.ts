import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  isScrolled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

}
