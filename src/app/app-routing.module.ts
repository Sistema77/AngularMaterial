import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';
import { DragDropToListComponent } from './drag-drop-to-list/drag-drop-to-list.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path:'lista', component: ListaComponent},
  { path:'registro', component: RegistroComponent},
  { path:'drag', component: DragDropToListComponent},
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
