import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  imports: [MatIconModule,CommonModule, RouterModule],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.css'
})
export class PageBannerComponent {
  @Input() title: string = '';
  @Input() showBanner: boolean = false;
}
