import { Component, HostListener, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/services/media-queries/media-queries.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  labels = ["Bio", "Gallery", "Fares"]; // TODO: Move somewhere else
  isMobile = false;
  isTablet = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMediaQueriesBooleans();
  }

  constructor(private mediaQueriesService: MediaQueriesService) {}

  updateMediaQueriesBooleans(): void {
    this.isMobile = this.mediaQueriesService.isMobile(window.innerWidth);
    this.isTablet = this.mediaQueriesService.isTablet(window.innerWidth);
  }
}
