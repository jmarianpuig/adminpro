import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(); // cargar una funcion global en Angular

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) {
  }

  ngOnInit(): void {
    customInitFunction(); // llamada a funcion global de un js externo
  }

}
