import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './share/footer/footer.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ListeCabinetComponent } from './pages/liste-cabinet/liste-cabinet.component';
import {DataViewModule} from 'primeng/dataview';
import { SearchCabinetComponent } from './pages/search-cabinet/search-cabinet.component';
import { DetailCabinetComponent } from './pages/detail-cabinet/detail-cabinet.component';
import { ScrollToBottomDirective } from './pages/detail-cabinet/scroll-to-bottom.directive';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListeCabinetComponent,
    SearchCabinetComponent,
    DetailCabinetComponent,
    ScrollToBottomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    AutoCompleteModule,
    FormsModule,
    DataViewModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
