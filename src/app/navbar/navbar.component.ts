import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  continuar(){
    if(speechSynthesis.speaking){
      speechSynthesis.resume();
    }
  }

  pause(){
    if(speechSynthesis.speaking){
      speechSynthesis.pause();
    }
  }

 leer(){
  let elements;
    speechSynthesis.cancel();
  for (let index = 0; index < document.getElementsByClassName('leerlo').length; index++) {
    elements = document.getElementsByClassName('leerlo')[index].textContent;
    speechSynthesis.speak(new SpeechSynthesisUtterance(elements!));
  }
 }

}
