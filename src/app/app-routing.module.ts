import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListeCabinetComponent } from './pages/liste-cabinet/liste-cabinet.component';
import { DetailCabinetComponent } from './pages/detail-cabinet/detail-cabinet.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { DossierMedicalComponent } from './pages/dossier-medical/dossier-medical.component';
import { SqueletteComponent } from './share/squelette/squelette.component';
import { GuardService as Guard } from './services/guard.service';
import { HomeMdComponent } from './medecin/home/home.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path: 'acceuil', component: HomeComponent, canActivate: [Guard]},
  {path: 'cabinets-medicaux', component:ListeCabinetComponent, canActivate: [Guard]},
  {path: 'cabinets/:id', component: DetailCabinetComponent, canActivate: [Guard]},
  {path: 'inscription', component: InscriptionComponent, canActivate: [Guard]},
  {path: 'racine', component: SqueletteComponent, canActivate: [Guard]},
  {path:'rendez-vous', component: RendezVousComponent, canActivate: [Guard]},
  {path: 'dossier-medical', component: DossierMedicalComponent, canActivate: [Guard]},
  {path: 'medecin/acceuil', component: HomeMdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
