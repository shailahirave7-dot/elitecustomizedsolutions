import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Industry {
  name: string;
  icon: string; // path to image or icon class
}

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css'],
  imports: [MatIconModule, MatDividerModule, MatCardModule, CommonModule],
})
export class IndustriesComponent {
  public industries: Industry[] = [
    { name: '', icon: 'assets/EnergySector.png' },
    { name: '', icon: 'assets/ConstructionSector.png' },
    { name: '', icon: 'assets/HealthSector.png' },
    { name: '', icon: 'assets/LogisticSector.png' },
    { name: '', icon: 'assets/TechnologySector.png' },
    { name: '', icon: 'assets/AgricultureSector.png' }
  ];
}