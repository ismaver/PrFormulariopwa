import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulComponent } from './formul/formul.component';
import { NotaFormulComponent } from './notaformul/notaformul.component';

const routes: Routes = [
  {path: '', redirectTo: 'paginas/formul', pathMatch: 'full'},
  {path:'paginas/formul', component: FormulComponent},
  {path: 'paginas/notaformul', component: NotaFormulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
