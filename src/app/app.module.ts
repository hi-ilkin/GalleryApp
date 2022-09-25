import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageGroupComponent } from './components/image-group/image-group.component';

@NgModule({
  declarations: [AppComponent, ImageItemComponent, ImageGroupComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
