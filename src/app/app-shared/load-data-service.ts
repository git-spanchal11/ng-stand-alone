import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  public data = Object.create(null);

  constructor() { }

  getUserData() {
    this.data  = {
      name: 'Sagar Panchal',
      header: {
        title: "Hi, I'm",
        subtitle: "Welcome to my professional portfolio website.",
        description: "Frontend Technical Lead with <strong class='gradient-text'>9+ years</strong> of experience building scalable, high-performance <strong class='gradient-text'>Web & Hybrid Mobile Applications</strong>. Specialized in enterprise-grade Angular & Ionic solutions.",
        skills: [
          'Angular / AngularJS',
          'Ionic Framework',
          'TypeScript & JavaScript',
          'HTML5 & CSS3',
          'Responsive Design',
          'Progressive Web Apps (PWAs)',
          'Cross-Platform Mobile Apps',
          'Agile & Scrum'
        ]
      },
      footer: {
        text: '© 2024 Our Application. All rights reserved.'
      }
    }

    return this.data;
  }

}
