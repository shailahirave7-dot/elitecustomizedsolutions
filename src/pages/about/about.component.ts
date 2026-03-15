import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../page-banner/page-banner.component';


@Component({
  selector: 'app-about',
  imports: [MatDividerModule, MatIconModule, MatCardModule, CommonModule, PageBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  activeIndex: number | null = null;
  @ViewChild('counterSection') counterSection!: ElementRef;
  @Input() title: string = '';
  @Input() showBanner: boolean = true;

  finalValue: number = 10;
  currentValue: number = 0;
  hasStarted = false;
  displayedCounts: number[] = [0, 0, 0, 0, 0];
  started: boolean[] = [false, false, false, false];

  // ngAfterViewInit(): void {
  //   const observer = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && !this.hasStarted) {
  //       this.startCounter();
  //       this.hasStarted = true;
  //     }
  //   }, { threshold: 0.8 });

  //   observer.observe(this.counterSection.nativeElement);
  // }

  startCounter() {
    const interval = setInterval(() => {
      if (this.currentValue < this.finalValue) {
        this.currentValue++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }

  goToContact() {
    // this.router.navigate(['/contact']);
  }

  stats = [
    { count: 15, label: 'Years of Experience in Customized Industrial Support Services', icon: 'engineering' },
    { count: 12, label: 'Years of Experience in Industrial Safety Systems', icon: 'health_and_safety' },
    { count: 7, label: 'Years of Experience in Contract Workforce Management', icon: 'groups' },
    { count: 7, label: 'Years of Experience in External Training Programs', icon: 'school' },
    { count: 3, label: 'Years of Experience in Safety Audits & Compliance Support', icon: 'fact_check' }
  ];

  ngAfterViewInit() {
    this.startCount();
  }

  startCount() {

    this.stats.forEach((stat, index) => {

      let current = 0;
      const increment = stat.count / 40;

      const interval = setInterval(() => {

        current += increment;

        if (current >= stat.count) {
          current = stat.count;
          clearInterval(interval);
        }

        this.displayedCounts[index] = Math.floor(current);

      }, 70);

    });

  }

}