import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor() { }

  autoresList(): string[]{
    return ['Miguel de Cervantes Saavedra', 'Jorge Luis Borges', 'Ramón Amaya Amador', 'Froylan Turcios'];
  }
}