import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import Swal from 'sweetalert2';


import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.pattern(('/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i').toString())])),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    public usuariosService: UsuariosService,
  ) {

  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.usuariosService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        console.log('respuesta login', data);
      },
      error: (error) => {
        console.log('estatus', error.status)
        if (error.status === 401) {
          Swal.fire('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
        } else {
          Swal.fire('Error al ingresar, intenta nuevamente!');
        }
        console.log('error onSubmit', error);
      }
    });
  }


  typeError(code: any) {
    if (code == 500) {

    } else if (code == 404) {

    }

  }
}

