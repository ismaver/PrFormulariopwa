import { Component } from '@angular/core';
import { Forms } from '../modelos/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from '../serives/database.service';
import { Firestore, doc, updateDoc} from '@angular/fire/firestore';


@Component({
  selector: 'app-notaformul',
  templateUrl: './notaformul.component.html',
  styleUrls: ['./notaformul.component.scss']
})
export class NotaFormulComponent {

  notas: Forms[] = [];
  programacion: any ;
  lenguaje: any ;
  matematicas: any ;
  embebidos: any;


  mostrarFormulario: boolean = true;
  notaEditando!: Forms;
  botonDesac: boolean = true;

  categoria: string  = '';

  //Constructor
  constructor(
    private fb: FormBuilder,
    private Notas: DatabaseService,
    private fires: Firestore,
  ){}

  //Metodo para eliminar las notas
  async eliminarNota(dato: Forms){
    const confirmacion = window.confirm(`¿Deseas eliminar la nota: ${dato.nombre}?`)

    if (confirmacion) {
      const respuesta = this.Notas.eliminarNota(dato);
      console.log(respuesta);
    } else {
      console.log("no se elimino la receta");
    }
  }

  //Metodo para desplegar el formulario de edicion
  editarNota(dato: Forms){
    this.botonDesac = true;
    this.notaEditando = dato;
    this.mostrarFormulario = true;
  }

  async actualizarNota(dato: Forms){
    this.botonDesac = true;
    console.log("editando")
    try {
      const formulario = document.getElementById('formularioNota') as HTMLFormElement;

      const nombre = (formulario.elements.namedItem('nombre') as HTMLTextAreaElement).value;
      const resenia = (formulario.elements.namedItem('resenia') as HTMLTextAreaElement).value;


      const formulref = doc(this.fires, `Forms/${dato.id}`);
      const notas = {
        nombre: nombre,
        resenia: resenia,
        categoria: this.categoria,
      };


      if (nombre == "" || resenia == "" || this.categoria == "" ) {
        alert("Debe llenar todos los parametros");
      } else {

        const confirmacion = window.confirm("¿Seguro que deseas actualizar?")

        if (confirmacion) {
          this.botonDesac = false;
          this.mostrarFormulario = false;

          return await updateDoc(formulref, notas);
        } else {
          this.botonDesac = true;
          this.mostrarFormulario = true;
        }
      }
    } catch (e) {
      //console.log(e);
    }
  }

  //Metodo para cancelar la edicion (ocultar el formulario)
  cancelarEdicion(){
    this.mostrarFormulario = true;
    this.botonDesac = false;
  }

  //Metodo que permite ejecutar lineas de codigo después de que Angular ha inicializado
  //todas las propiedades del componente y ha establecido la conexión entre el componente y su vista
  ngOnInit(): void {
    this.Notas.getProgramacion('Programacion').subscribe(programacion => {
      this.programacion = programacion;
    });

    this.Notas.getLenguaje('Lenguaje').subscribe(lenguaje => {
      this.lenguaje = lenguaje;
    });

    this.Notas.getMatematicas('Matematicas').subscribe(matematicas => {
      this.matematicas = matematicas;
    });

    this.Notas.embebidos('Embebidos').subscribe(embebidos => {
      this.embebidos = embebidos;
    });

  }

}
