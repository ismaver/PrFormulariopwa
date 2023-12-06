import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Forms } from 'src/app/modelos/forms';
import { DatabaseService } from '../serives/database.service';

@Component({
  selector: 'app-formul',
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.scss']
})
export class FormulComponent {

  notas: Forms[] = [];
  notaListar: any;

  categoria: string = '';

  constructor(
    private router: Router,
    private Notas: DatabaseService
  ){
    this.notaListar = this.Notas.getAll();

    this.Notas.imprimirNotas().subscribe((notas)=>
    this.notas = notas);
  }

  guardarNota(nombre: HTMLInputElement, resenia: HTMLTextAreaElement) {
    //Condicion que permite validar si se ingresaron todos los datos
    if (!nombre.value || !resenia.value || !this.categoria ) {
      alert('Debe completar todos los campos');
      return false;
    } else {
      const notaExiste = this.router.getCurrentNavigation()?.extras.state?.['notas'];
      const dato = {
        nombre: nombre.value,
        resenia: resenia.value,
        categoria: this.categoria

      }

      this.Notas.guardarTareaFire(dato);
      alert('Nota guardada');

      //Redirige a la pagina de notas
      this.router.navigate(['./paginas/notaformul']);
      nombre.focus();
      return false;
    };
  };






}
