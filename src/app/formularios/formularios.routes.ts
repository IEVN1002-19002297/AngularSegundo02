import { Routes } from "@angular/router";


export default [
  {
    path:'multiplicacion',
    loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(c=>c.MultiplicacionComponent)
  },
  {
    path:'distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
  },
  {
    path:'zodiaco',
    loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
  },

]as Routes;
