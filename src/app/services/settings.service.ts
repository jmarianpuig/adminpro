import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private urlTheme = document.querySelector('#theme');

  constructor() {

    const temaGuadado = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.urlTheme.setAttribute('href', temaGuadado);
  }

  changeTheme( theme: string ): void {

    const url = `./assets/css/colors/${ theme }.css`;
    this.urlTheme.setAttribute('href', url);
    localStorage.setItem('theme', url );
    this.checkCurrentTheme();
  }


  checkCurrentTheme(): void {

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.urlTheme.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }

    });

  }
}
