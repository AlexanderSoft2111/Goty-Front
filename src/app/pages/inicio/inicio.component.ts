import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore.collection('Goty').valueChanges()
      .pipe(
        map( (res: any[]) => {
          return res.map( ({name, votos}) =>  ({name, value: votos}) ) //Convertimos al arreglo en las propiedades que necesitamos devolver
        })
      )
      .subscribe(juegos => {
        this.juegos = juegos;
    })
  }

}
