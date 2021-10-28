import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppDetailsComponent } from './app-details/app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    DesignComponent,
    ContactComponent,
    HomeComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
