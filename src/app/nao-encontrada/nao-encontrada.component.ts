import { Component, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nao-encontrada',
  templateUrl: './nao-encontrada.component.html',
  styleUrls: ['./nao-encontrada.component.css']
})
export class NaoEncontradaComponent implements OnInit {
  faX = faX;

  constructor() { }

  ngOnInit(): void {
  }

}
