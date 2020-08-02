import { Component } from '@angular/core';
import { ProfesService } from './profes.service';
@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    lista: string[];

    constructor(private profesServices: ProfesService){
        this.lista = profesServices.profesList();
    }
}