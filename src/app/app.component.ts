import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notaforms';

  paginas=[
    {enlace: 'formul', path: 'paginas/formul'},
    {enlace: 'notaformul', path: 'paginas/notaformul'}
  ]
}
