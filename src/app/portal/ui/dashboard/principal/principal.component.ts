import { Component, OnInit } from '@angular/core';

// Importación de router
import { Router } from '@angular/router';

// CONSTANTS & UTILITIES
import * as Images from '../../../utils/imageRoutes';
import * as TextsES from '../../../utils/textConstantsES';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  // Image paths
  public logoNaatTech = Images.LOGO_NAAT_TECH;

  // Texts
  public menuTexts = TextsES.MENU;
  public buttonsTexts = TextsES.BUTTONS;
  public errorMessages = TextsES.ERROR_MESSAGES;

  // Window size
  private windowSize: any;

  constructor( private router: Router ) {}

  ngOnInit(): void {

  }

  public logoutSession() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  public verifyScreen() {
    return !(window.innerWidth < 1024);
  }
}
