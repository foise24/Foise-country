import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { StatelistComponent } from './statelist/statelist.component';
import { CitylistComponent } from './citylist/citylist.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    StatelistComponent,
    CitylistComponent,
    DetailsComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
