import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TopCardComponent } from './top-card/top-card.component';
import { FeedsComponent } from './feeds/feeds.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopCardComponent,
    FeedsComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
