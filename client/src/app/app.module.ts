import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importer le module
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MeComponent } from './components/me/me.component';
import { TapComponent } from './components/tap/tap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MeComponent,
    TapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
