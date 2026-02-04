import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadDataService } from '../../../app-shared/load-data-service';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './app-landing-page.html',
  styleUrl: './app-landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLandingPage implements OnInit, OnDestroy {

  public data = Object.create(null);
  
  constructor(private router: Router, private loadDataService: LoadDataService) {

  }

  ngOnInit() {
    this.data = this.loadDataService.getUserData();
  }

  ngOnDestroy() {
    this.data = null;
    console.log('Landing page destroyed');
  }

  goToHome() {
    this.router.navigate(['/HomePage']);
  }

}
