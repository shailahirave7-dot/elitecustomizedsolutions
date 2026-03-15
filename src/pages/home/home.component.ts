import { Component, Input, Output } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { IndustriesComponent } from '../industries/industries.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ServicesComponent, IndustriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() showBanner: boolean = true;

}
