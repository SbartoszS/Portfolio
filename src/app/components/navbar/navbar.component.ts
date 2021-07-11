
import { Component } from '@angular/core';
import { faBars, faEnvelope, faHome, faLaptop, faProjectDiagram, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbarOpen = false;
  faBars = faBars;
  faTimes = faTimes;
  faHome = faHome;
  faProjectDiagram = faProjectDiagram;
  faUserAlt = faUserAlt;
  faEnvelope = faEnvelope;
  faLaptop = faLaptop;



  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
