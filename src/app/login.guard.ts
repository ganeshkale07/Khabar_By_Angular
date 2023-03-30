import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const users = ['ggkale@gmail.com','abc@gmail.com'];
    const passkey = ['123456','786786'];
    if(users.find(value => value == email) && passkey.find(value => value == password)){
      return true;
    }
    else{
      alert("Login Failed");
      document.location.href = 'http://localhost:4200/Khabar/sign-in';
      return false;

    }
  }
  
}
