import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';


@Component({
  templateUrl: 'crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})

export class CrearClienteComponent {

  identificacion: string = "";
  tipoId: string = "";
  nombres: string = "";
  apellidos: string = "";
  fechaNac: Date = new Date();
  constructor(private clienteService: ClienteService, private router: Router) {
    this.fechaNac = new Date(this.fechaNac.setFullYear(this.fechaNac.getFullYear() - 18));
  }
  onFormSubmit(e: any) {
    const cliente: Cliente = {
      cliId: 0,
      cliTipoIdentificacion: this.tipoId,
      cliIdentificacion: this.identificacion,
      cliNombres: this.nombres,
      cliApellidos: this.apellidos,
      cliFechaNacimiento: this.fechaNac
    };

    this.clienteService.guardarCliente(cliente).subscribe(data => {
      notify({
        message: 'Cliente creado correctamente',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);

      this.router.navigate(['/home'])
    }, error => {
      notify({
        message: 'Error Creando Cliente',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);
      this.router.navigate(['/home'])
    })



  };
}