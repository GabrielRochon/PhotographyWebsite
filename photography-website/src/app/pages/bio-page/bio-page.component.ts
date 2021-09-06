import { Component, HostListener, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/services/media-queries/media-queries.service';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent implements OnInit {

  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMediaQueriesBooleans();
  }

  constructor(private mediaQueriesService: MediaQueriesService) {}

  ngOnInit(): void {
    this.updateMediaQueriesBooleans();
  }

  updateMediaQueriesBooleans(): void {
    this.isMobile = this.mediaQueriesService.isMobile(window.innerWidth);
  }
}
