import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MeComponent } from './components/me/me.component';
import { TapComponent } from './components/tap/tap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MeComponent,
    TapComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
