import { Component } from '@angular/core';
import { HelloWorldComponent } from './helloworld/helloWorld.component'
import { MinhapaginaComponent } from './minhapagina/minhapagina.component'
import { CalculadoraComponent } from './calculadora/calculadora.component'

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhapaginaComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
