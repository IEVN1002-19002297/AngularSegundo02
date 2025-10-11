import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component')
  },
  {
    path:'listaAlumnos',
    loadComponent:()=>import('./alumnos/alumnos.component')
  },
  {
    path:'editar',
    loadComponent:()=>import('./editar/editar.component')
  },
  {
    path:'eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component')
  }
]as Routes;
