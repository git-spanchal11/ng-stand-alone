import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonContent, IonAvatar, IonLabel } from "@ionic/angular/standalone";
import { HttpService } from '../../../app-core/http/http.service';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";
import { Observable } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { NgForOf } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-home-page',
  imports: [IonItem, IonList, IonContent, IonAvatar, IonLabel, AppHeader, AppFooter, ScrollingModule],
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
