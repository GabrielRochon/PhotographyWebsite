import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BioPageComponent } from './pages/bio-page/bio-page.component';
import { IconsComponent } from './icons/icons.component';
import { IconSingleComponent } from './icons/icon-single/icon-single.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BioPageComponent,
    IconsComponent,
    IconSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
