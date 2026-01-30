import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  imports: [IonButton, IonButtons, IonTitle, IonHeader, IonToolbar],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
constructor(private router: Router) {

  }

goToHome() {
    this.router.navigate(['/HomePage']);
  }

}
