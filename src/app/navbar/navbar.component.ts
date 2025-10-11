import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title= 'AngularSegundo02';
  ngOnInit():void{
    initFlowbite();

  }

}
