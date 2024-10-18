import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarouselComponent} from './components/carousel/carousel.component';
import {MenuOneComponent} from './components/menu-one/menu-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, MenuOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'politecnico';
}
