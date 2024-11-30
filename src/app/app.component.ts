import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HotelManagmentWeb';

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document // Inject the Document object
  ) {}

  ngOnInit() {
    this.setThemeBasedOnOSPreferences();
  }

  private setThemeBasedOnOSPreferences(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDark.matches) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }

    // Listen for changes in the user's OS preferences
    prefersDark.addEventListener('change', (e) => {
      if (e.matches) {
        this.setDarkTheme();
      } else {
        this.setLightTheme();
      }
    });

  }

  private setDarkTheme() {
    // this.renderer2.addClass(this.document.body, 'dark-theme'); // Or your root element
    // this.renderer2.removeClass(this.document.body, 'light-theme');
  }

  private setLightTheme() {
    // this.renderer2.addClass(this.document.body, 'light-theme');
    this.renderer2.removeClass(this.document.body, 'dark-theme');
  }

  
}
