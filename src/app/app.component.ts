import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarouselComponent} from './components/carousel/carousel.component';
import {MenuOneComponent} from './components/menu-one/menu-one.component';
import {MenuSecondComponent} from './components/menu-second/menu-second.component';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, MenuOneComponent, MenuSecondComponent, MatIconButton, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'politecnico';

  showSecondMenu = false
}
