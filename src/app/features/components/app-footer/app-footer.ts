import { Component } from '@angular/core';
import { IonFooter, IonLabel, IonToolbar, IonHeader, IonTitle, IonButtons, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  imports: [IonButton, IonButtons, IonTitle, IonHeader, IonFooter, IonLabel, IonToolbar],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.scss',
})
export class AppFooter {

}
