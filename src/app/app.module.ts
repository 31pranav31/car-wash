import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './user/edit/edit.component';
import { SearchComponent } from './user/search/search.component';
import { EditServiceComponent } from './service-center/edit-service/edit-service.component';
import { AddServiceComponent } from './service-center/add-service/add-service.component';
import { ServiceService } from "./shared/service.service";
import { BookingsService } from './shared/bookings.service';
import { BookComponent } from './user/book/book.component';
import { GlobalsService } from "./shared/globals.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServiceCenterComponent,
    HeaderComponent,
    EditComponent,
    SearchComponent,
    EditServiceComponent,
    AddServiceComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServiceService,BookingsService,GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
