import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulComponent } from './formul/formul.component';
import { NotaFormulComponent } from './notaformul/notaformul.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    FormulComponent,
    NotaFormulComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"formularionotas-e4017","appId":"1:609146792680:web:71e5fe0bec4d1e00a9f75d","storageBucket":"formularionotas-e4017.appspot.com","apiKey":"AIzaSyCd9OY3d0QKRDUd2hakbnsS2vvXsP2rxWQ","authDomain":"formularionotas-e4017.firebaseapp.com","messagingSenderId":"609146792680"})),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp((environment.firebaseConfig)),
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    


  ],
  providers: [{
    provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
