import { Component, signal } from '@angular/core';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonApp, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-stand-alone');
}
