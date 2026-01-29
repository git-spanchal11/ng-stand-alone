import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './app-landing-page.html',
  styleUrl: './app-landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLandingPage {

  constructor(private router: Router) {

  }

  

}
