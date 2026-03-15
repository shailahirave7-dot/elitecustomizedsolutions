import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PageBannerComponent } from '../page-banner/page-banner.component';

@Component({
  selector: 'app-services',
  imports: [MatIconModule, MatDividerModule, MatIconModule, MatCardModule,PageBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  openContent: string | null = null;
  @Input() title: string = '';
  @Input() showBanner: boolean = true;
  
  toggleContent(card: string) {
    if (this.openContent === card) {
      this.openContent = null; // Close if already open
    } else {
      this.openContent = card; // Open the clicked card
    }
  }

}
