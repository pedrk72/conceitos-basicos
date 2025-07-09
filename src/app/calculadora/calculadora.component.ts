import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calculateResult() {
    console.log("Aqui estou eu");
    this.result = this.num1 + this.num2
  }


}
