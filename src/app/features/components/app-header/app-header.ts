import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
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
