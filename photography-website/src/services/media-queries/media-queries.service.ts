import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaQueriesService {

  tabletBreakpoint = 768;
  mobileBreakpoint = 480;

  constructor() { }

  public isMobile(windowWidth: number): boolean {
    return windowWidth < this.mobileBreakpoint;
  }

  public isTablet(windowWidth: number): boolean {
    return windowWidth < this.tabletBreakpoint;
  }
}
