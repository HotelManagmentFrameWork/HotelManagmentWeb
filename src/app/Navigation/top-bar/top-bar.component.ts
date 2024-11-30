import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Ensure the DOM is fully loaded before querying for the element
    const maximizeButton = document.querySelector('.button-zoom-maximize');

    if (maximizeButton) {
      maximizeButton.addEventListener('click', () => this.toggleFullscreen());
    } else {
      console.error("Button with class 'button-zoom-maximize' not found.");
    }
  }

  toggleFullscreen(): void {
    const doc = document as any; // Cast document to 'any' for legacy properties
  
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (doc.documentElement.msRequestFullscreen) {
        doc.documentElement.msRequestFullscreen(); // Use the cast 'doc' here
      } else if (doc.documentElement.mozRequestFullScreen) { // Use 'doc'
        doc.documentElement.mozRequestFullScreen(); // Legacy
      } else if (doc.documentElement.webkitRequestFullscreen) { // Use 'doc'
        doc.documentElement.webkitRequestFullscreen(); // Legacy
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (doc.exitFullscreen) {
        doc.exitFullscreen(); // Legacy, use 'doc'
      } else if (doc.mozCancelFullScreen) {      // Legacy, use 'doc'
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {    // Legacy, use 'doc'
        doc.webkitExitFullscreen();
      }
    }
  }
}
