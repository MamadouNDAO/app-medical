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
import { InscriptionComponent } from './pages/inscription/inscription.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {PaginatorModule} from 'primeng/paginator';
import { authInterceptorProviders } from './services/interceptor.service';
import {DialogModule} from 'primeng/dialog';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import {BadgeModule} from 'primeng/badge';
import { DossierMedicalComponent } from './pages/dossier-medical/dossier-medical.component';
import { SqueletteComponent } from './share/squelette/squelette.component';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GuardService } from './services/guard.service';
import { NavbarMdComponent } from './medecin/navbar/navbar.component';
import { HomeMdComponent } from './medecin/home/home.component';

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
    ScrollToBottomDirective,
    InscriptionComponent,
    RendezVousComponent,
    DossierMedicalComponent,
    SqueletteComponent,
    NavbarMdComponent,
    HomeMdComponent
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
    HttpClientModule,
    MatButtonModule,
    NgxUiLoaderModule,
    ToastModule,
    PaginatorModule,
    DialogModule,
    BadgeModule,
    JwtModule
  ],
  providers: [
    MessageService, 
    authInterceptorProviders,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
