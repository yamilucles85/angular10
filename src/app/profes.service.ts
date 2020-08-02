import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesService {

  constructor() { }

  profesList(): string[] {
    return ['x', 'y', 'z'];
  }

}
