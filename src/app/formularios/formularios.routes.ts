import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path:'multiplicacion',
    loadComponent:()=>import('./multiplicacion/multiplicacion.component')
  },
  {
    path:'distancia',
    loadComponent:()=>import('./distancia/distancia.component')
  },
  {
    path:'zodiaco',
    loadComponent:()=>import('./zodiaco/zodiaco.component')
  }

]as Routes;
