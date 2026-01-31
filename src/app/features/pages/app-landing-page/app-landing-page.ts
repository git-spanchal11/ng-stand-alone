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

  constructor(private router: Router) {

  }

  goToHome() {
    this.router.navigate(['/HomePage']);
  }

}
