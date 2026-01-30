import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { AppHeader } from '../../components/app-header/app-header';
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, AppHeader, AppFooter],
  templateUrl: './app-landing-page.html',
  styleUrl: './app-landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLandingPage {

  constructor() {

  }

}
