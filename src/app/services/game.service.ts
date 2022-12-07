import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getJuegos(){

    // Condición para que no haga la consulta http varias veces si ya cargamos el arreglo
    if(this.juegos.length > 0){
      console.log('desde cache');
      return of(this.juegos);
    } else {
      
      console.log('desde internet');
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
          .pipe(
            tap(juegos => this.juegos = juegos)
          )
    }
  }

  votarJuego(id: string){

    return this.http.post(`${environment.url}/api/goty/${id}`,{})
      //Para atrapar el error y mostrarlo en la pantalla
      .pipe(
        catchError( err => {
          return of(err.error);
        })
      );
  }

}
