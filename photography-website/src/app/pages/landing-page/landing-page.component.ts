import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  tabletBreakpoint = 1200;
  innerWidth = 0;
  labels = ["Bio", "Gallery", "Fares"]

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  isTablet(): boolean {
    return this.getWindowWidth() < this.tabletBreakpoint;
  }

  getWindowWidth(): number {
    return this.innerWidth;
  }
}
