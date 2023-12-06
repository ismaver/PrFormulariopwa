import { Forms } from './../modelos/forms';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private path = '/Forms';

  //variables ... cambiar a categoria de materias
  private programacionCategoria: AngularFirestoreCollection<Forms>;
  private lenguajeCategoria: AngularFirestoreCollection<Forms>;
  private matematicasCategoria: AngularFirestoreCollection<Forms>;
  private embebidosCategoria: AngularFirestoreCollection<Forms>;

  private formulRef: AngularFirestoreCollection<any>;

  constructor(private Database: AngularFirestore,
    private fires: Firestore) {
    this.formulRef = Database.collection(this.path);

      this.formulRef.valueChanges().subscribe(data => {
        console.log(data);
      })

      this.programacionCategoria = this.Database.collection<Forms>('Forms');
    this.lenguajeCategoria = this.Database.collection<Forms>('Forms');
    this.matematicasCategoria = this.Database.collection<Forms>('Forms');
    this.embebidosCategoria = this.Database.collection<Forms>('Forms');
  }


  guardarTareaFire(dato: Forms) {
    const uid = this.Database.createId();
    dato.id = uid;
    this.formulRef.doc(uid).set(Object.assign({}, dato));
  }

  getAll() {
    return this.formulRef.valueChanges();
  }

  imprimirNotas(): Observable<Forms[]> {
    const respuesta = collection(this.fires, 'notas');
    return collectionData(respuesta, { idField: 'uid' }) as Observable<Forms[]>;
  }

  // posible error en notas/$
  /*eliminarNota(nota: Forms) {
    const recetaRef = doc(this.fires, `notas/${nota.id}`);
    return deleteDoc(recetaRef);
  }*/
  eliminarNota(nota: Forms) {
    const notaRef = this.Database.collection('Forms').doc(nota.id);
    return notaRef.delete();
  }


  //Metodo para obtener las notas de la categoria Tareas
  getProgramacion(categoria: string): Observable<Forms[]> {
    return this.programacionCategoria
      .valueChanges({ idField: 'uid' }) // Obtén cambios en los documentos y agrega el campo 'uid'
      .pipe(
        map((notas: Forms[]) => {
          // Filtra las notas por la categoría deseada
          return notas.filter(nota => nota.categoria === categoria);
        })
      );
  }

  //Metodo para obtener las notas de la categoria Pruebas
  getLenguaje(categoria: string): Observable<Forms[]> {
    return this.lenguajeCategoria
      .valueChanges({ idField: 'uid' }) // Obtén cambios en los documentos y agrega el campo 'uid'
      .pipe(
        map((notas: Forms[]) => {
          // Filtra las notas por la categoría deseada
          return notas.filter(nota => nota.categoria === categoria);
        })
      );
  }

  //Metodo para obtener las notas de la categoria Examenes
  getMatematicas(categoria: string): Observable<Forms[]> {
    return this.matematicasCategoria
      .valueChanges({ idField: 'uid' }) // Obtén cambios en los documentos y agrega el campo 'uid'
      .pipe(
        map((notas: Forms[]) => {
          // Filtra las notas por la categoría deseada
          return notas.filter(nota => nota.categoria === categoria);
        })
      );
  }

  //Metodo para obtener las notas de la categoria Practicas
  embebidos(categoria: string): Observable<Forms[]> {
    return this.embebidosCategoria
      .valueChanges({ idField: 'uid' }) // Obtén cambios en los documentos y agrega el campo 'uid'
      .pipe(
        map((notas: Forms[]) => {
          // Filtra las notas por la categoría deseada
          return notas.filter(nota => nota.categoria === categoria);
        })
      );
  }

  //**************************************************************** */
}
