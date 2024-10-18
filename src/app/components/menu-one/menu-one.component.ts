import {Component, output} from '@angular/core';
import {MatRipple} from '@angular/material/core';

@Component({
  selector: 'app-menu-one',
  standalone: true,
  imports: [
    MatRipple
  ],
  templateUrl: './menu-one.component.html',
  styleUrl: './menu-one.component.css'
})
export class MenuOneComponent {

  onClickSecondMenu = output()
}
