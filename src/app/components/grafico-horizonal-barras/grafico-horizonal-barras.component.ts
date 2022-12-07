import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-horizonal-barras',
  templateUrl: './grafico-horizonal-barras.component.html',
  styleUrls: ['./grafico-horizonal-barras.component.css']
})
export class GraficoHorizonalBarrasComponent implements OnDestroy {

  @Input() results: any[] = [];

/*   results: any[] = [
    {
      "name": "Juego 1",
      "value": 25
    },
    {
      "name": "Juego 2",
      "value": 20
    },
    {
      "name": "Juego 3",
      "value": 10
    },
    {
      "name": "Juego 4",
      "value": 40
    }
  ]; */

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Puntaje';
  showYAxisLabel = true;
  yAxisLabel = 'Juego';

  colorScheme = 'nightLights';

 /*  intervalo; //Variable para igualar al resultado del intervalo
 */
  constructor() {
   
    
/*     this.intervalo = setInterval(() => {
     console.log('Tick');

     const newResults = [...this.results]; //Extraemos todas las propiedades del objeto para crear un nuevo

     for(let i in newResults){ //Rrecoremos cada una de los elementos para cambiar el valor de cada uno de ellos
      newResults[i].value = Math.round( Math.random() * 500); //Redondeamos a un numero entero
      this.results = [...newResults]; //Igualamos al antiguo arreglo para que haga referencia y se actualicen los cambios
      }

   }, 1500); //Le decimos que se ejecute cada segundo y medio
 */
  }
  ngOnDestroy(){
 /*    
   clearInterval(this.intervalo); //Le indicamos que cuando se destruya el componente no se ejecute esa accion limpiando el intervalo
 */

  }

  onSelect(event: any) {
    console.log(event);
  }

}
