import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  
  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getJuegos().subscribe(juegos => {
      this.juegos = juegos;
      console.log(this.juegos);
    });

  }

  votar(juego: Game){
    this.gameService.votarJuego(juego.id).subscribe( (res: any) => {
        if(res.ok){
          console.log(res);
            Swal.fire(`Gracias por votar por ${juego.name}`, res.mensaje, 'success')
          } else{
          Swal.fire('Oops', res.msg, 'error')
        }
    });
  }

}
