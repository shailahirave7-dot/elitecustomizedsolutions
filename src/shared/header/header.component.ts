import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, RouterModule, MatToolbarModule,
    MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.drawer.opened) {
      this.drawer.close();
    }
  }
}