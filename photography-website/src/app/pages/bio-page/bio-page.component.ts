import { Component, HostListener } from '@angular/core';
import { MediaQueriesService } from 'src/services/media-queries/media-queries.service';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent {

  isTablet = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMediaQueriesBooleans();
  }

  constructor(private mediaQueriesService: MediaQueriesService) {}

  updateMediaQueriesBooleans(): void {
    this.isTablet = this.mediaQueriesService.isTablet(window.innerWidth);
  }
}
