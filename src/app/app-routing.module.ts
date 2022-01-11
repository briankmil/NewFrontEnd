import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { BrowserModule } from '@angular/platform-browser';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { ListadoFacturasComponent } from './pages/listado-facturas/listado-facturas.component';
import { CrearFacturaComponent } from './pages/crear-factura/crear-factura.component';
import { CrearFacturaDetalleComponent } from './pages/crear-factura/crear-factura-detalle/crear-factura-detalle.component';
import { CrearEntradaComponent } from './pages/crear-entrada/crear-entrada.component';

const routes: Routes = [
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'inventario',
    component: CrearEntradaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'listado-productos',
    component: ListadoProductosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'listado-clientes',
    component: ListadoClientesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'crear-factura',
    component: CrearFacturaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'listado-facturas',
    component: ListadoFacturasComponent,
    canActivate: [ AuthGuardService ]
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule,
    BrowserModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxNumberBoxModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, ListadoProductosComponent, CrearProductoComponent, ListadoClientesComponent
    , CrearClienteComponent,ListadoFacturasComponent, CrearFacturaComponent, CrearFacturaDetalleComponent,CrearEntradaComponent]
})
export class AppRoutingModule { }
