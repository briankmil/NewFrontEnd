export const navigation = [
  {
    text: 'Inicio',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Productos',
    icon: 'folder',
    items: [
      {
        text: 'Crear',
        path: '/crear-producto'
      },
      {
        text: 'Listado',
        path: '/listado-productos'
      },
      {
        text: 'Agregar Inventario',
        path: '/inventario'
      }

    ]
  },
  {
    text: 'Clientes',
    icon: 'folder',
    items: [
      {
        text: 'Crear',
        path: '/crear-cliente'
      },
      {
        text: 'Listado',
        path: '/listado-clientes'
      }
    ]
  },
  {
    text: 'Facturas',
    icon: 'folder',
    items: [
      {
        text: 'Crear',
        path: '/crear-factura'
      },
      {
        text: 'Listado',
        path: '/listado-facturas'
      }
    ]
  }
];
