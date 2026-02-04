import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpService } from '../../../app-core/http/http.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";
import { AppContent } from "../../components/app-content/app-content";

@Component({
  selector: 'app-home-page',
  imports: [ScrollingModule, AppFooter, AppHeader],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  countries: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  private fetchCountries(): void {
    this.httpService.GET('countries').subscribe((responseData:any) => {
        console.log('Fetched countries:', responseData);
        this.countries = responseData;
    });
  }

}
