import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {


  formulario!: FormGroup
  resultado!: number
  n1!: number
  n2!: number
  n3!: number
  n4!: number

    ngOnInit():void{
      this.formulario=new FormGroup({
        numero1:new FormControl(''),
        numero2:new FormControl(''),
        numero3:new FormControl(''),
        numero4:new FormControl('')
      })

    }

    multiNumeros():void{
      this.n1=this.formulario.value.numero1;
      this.n2=this.formulario.value.numero2;
      this.n3=this.formulario.value.numero3;
      this.n4=this.formulario.value.numero4;
      this.resultado=(this.n1*this.n2);
    }

}
