import { Component, OnInit } from '@angular/core';
import { NavbarBasicoComponent } from '../componentes/navbar-basico/navbar-basico.component';
import { DropdownBasicoComponent } from '../componentes/dropdown-basico/dropdown-basico.component';
import { ModalBasicoComponent } from '../componentes/modal-basico/modal-basico.component';
import { NavbarDropdownComponent } from '../componentes/navbar-dropdown/navbar-dropdown.component';
import { CarouselComponent } from '../componentes/carousel/carousel.component';

@Component({
  selector: 'app-layout-uno',
  standalone: true,
  imports: [
    NavbarBasicoComponent,
    DropdownBasicoComponent,
    ModalBasicoComponent,
    NavbarDropdownComponent,
    CarouselComponent,
  ],
  templateUrl: './layout-uno.component.html',
  styleUrl: './layout-uno.component.css',
})
export class LayoutUnoComponent implements OnInit {
  ngOnInit(): void {}
}
