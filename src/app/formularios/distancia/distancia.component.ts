import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: number;
  ObjDistancia = new Distancia();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(),
      numero2: new FormControl(),
      numero3: new FormControl(),
      numero4: new FormControl()
    });
  }

  calcularDistancia(): void {
    this.ObjDistancia.n1 = this.formulario.value.numero1;
    this.ObjDistancia.n2 = this.formulario.value.numero2;
    this.ObjDistancia.n3 = this.formulario.value.numero3;
    this.ObjDistancia.n4 = this.formulario.value.numero4;

    this.resultado = this.ObjDistancia.calcularDistancia();
  }
}
