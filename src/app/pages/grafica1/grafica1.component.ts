import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download ', 'In-Store ', 'Mail-Order '];
  public data1 = [
    [50, 30, 100],
  ];


}
