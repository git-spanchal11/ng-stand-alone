import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol } from "@ionic/angular/standalone";
import { AppHeader } from '../../components/app-header/app-header';
import { AppFooter } from "../../components/app-footer/app-footer";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [IonContent],
  templateUrl: './app-landing-page.html',
  styleUrl: './app-landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLandingPage {

  public data = Object.create(null);

  constructor(private router: Router) {

    this.data = {
      name: 'Sagar Panchal',
      header: {
        title: "Hi, I'm",
        subtitle: "Welcome to my professional portfolio website.",
        description: "Frontend Technical Lead with <strong class='gradient-text'>9+ years</strong> of experience building scalable, high-performance <strong class='gradient-text'>Web & Hybrid Mobile Applications</strong>. Specialized in enterprise-grade Angular & Ionic solutions.",
        skills: [
          'Angular / AngularJS',
          'Ionic Framework',
          'TypeScript & JavaScript',
          'HTML5 & CSS3',
          'Responsive Design',
          'Progressive Web Apps (PWAs)',
          'Cross-Platform Mobile Apps',
          'Agile & Scrum'
        ]
      },
      footer: {
        text: '© 2024 Our Application. All rights reserved.'
      }
    }

  }

  goToHome() {
    this.router.navigate(['/HomePage']);
  }

}
