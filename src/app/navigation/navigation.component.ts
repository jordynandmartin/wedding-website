import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit , AfterViewInit{
  @ViewChild('navigationBar') menuElement!: ElementRef;

  isSticky : boolean = false;
  menuPosition!: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.menuElement);
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.menuPosition){
          this.isSticky = true;
      } else {
          this.isSticky = false;
      }
}

}
