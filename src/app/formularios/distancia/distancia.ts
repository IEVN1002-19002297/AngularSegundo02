export class Distancia {

n1!: number
n2!: number
n3!: number
n4!: number
diferenciaX!: number;
diferenciaY!: number;


  calcularDistancia(): number {
    this.diferenciaX = this.n3 - this.n1;
    this.diferenciaY = this.n4 - this.n2;
    return Math.sqrt(this.diferenciaX * this.diferenciaX + this.diferenciaY * this.diferenciaY);
  }
}
