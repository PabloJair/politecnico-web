import { Component } from '@angular/core';
import {MatRipple} from '@angular/material/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-second',
  standalone: true,
  imports: [
    MatRipple,
    RouterLink
  ],
  templateUrl: './menu-second.component.html',
  styleUrl: './menu-second.component.css'
})
export class MenuSecondComponent {

}
