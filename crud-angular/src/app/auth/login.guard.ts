import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);
  let router = inject(Router);

  if(loginService.hasPermission("USER") && state.url == '/admin/marcas'){
    alert('Ops, você não pode acessar aqui!')
    router.navigate(['/']);
    return false;
  }

  return true;
};
