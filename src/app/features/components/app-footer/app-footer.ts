import { Component } from '@angular/core';
import { IonFooter, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  imports: [IonFooter, IonToolbar],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.scss',
})
export class AppFooter {

}
