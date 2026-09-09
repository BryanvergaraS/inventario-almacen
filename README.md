# Inventario de Productos - Almacén

Aplicación web de gestión de inventario para un almacén de barrio, desarrollada con React (Vite) y Firebase (Firestore). Permite registrar, listar, editar y eliminar productos, con persistencia en la nube y un resumen del inventario.

## Autor

Bryan Vergara Santander

## Tecnologías utilizadas

- React (con Vite)
- Firebase / Cloud Firestore
- JavaScript

## Funcionalidades

- Registro de productos (nombre, precio y cantidad)
- Listado de productos en tabla
- Edición y eliminación de productos
- Persistencia de datos en Firestore (base de datos en la nube)
- Resumen del inventario: total de productos, unidades totales y valor total

## Instalación y ejecución

1. Clonar el repositorio:

```
   git clone https://github.com/BryanvergaraS/inventario-almacen.git
```

2. Entrar a la carpeta del proyecto:

```
   cd inventario-almacen
```

3. Instalar las dependencias:

```
   npm install
```

4. Crear un archivo `.env` en la raíz del proyecto con las credenciales de Firebase:

```
   VITE_API_KEY=tu_api_key
   VITE_AUTH_DOMAIN=tu_auth_domain
   VITE_PROJECT_ID=tu_project_id
   VITE_STORAGE_BUCKET=tu_storage_bucket
   VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_APP_ID=tu_app_id
```

5. Ejecutar el proyecto:

```
   npm run dev
```

6. Abrir en el navegador la dirección que aparece (por defecto http://localhost:5173).

## Nota sobre las credenciales

Por seguridad, el archivo `.env` con las credenciales de Firebase no está incluido en este repositorio (está protegido en el `.gitignore`). Para ejecutar el proyecto es necesario crear el archivo `.env` con las credenciales propias de un proyecto de Firebase.