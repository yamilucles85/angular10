import { Component, OnInit } from '@angular/core';
import { AutoresService } from './autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
   autores: string[];
   
  // Dependency Injection
  constructor(public AutoresService: AutoresService) { }

  ngOnInit(): void {
    this.autores = this.AutoresService.autoresList();
  }
}
