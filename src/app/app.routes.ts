import { Routes } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { ServicesComponent } from '../pages/services/services.component';
import { CareerComponent } from '../pages/career/career.component';
import { HomeComponent } from '../pages/home/home.component';
import { IndustriesComponent } from '../pages/industries/industries.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'career', component: CareerComponent },
    { path: 'home', component: HomeComponent },
      { path: 'industriese', component: IndustriesComponent }


];
