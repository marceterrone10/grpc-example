# NestJS gRPC Microservices

Ejemplo de microservicios con NestJS y gRPC.

## Estructura

- `apps/apigateway` - API Gateway (HTTP REST en puerto 3000)
- `apps/auth` - Microservicio de autenticacion (gRPC)
- `libs/common` - Tipos y constantes compartidas
- `proto/auth.proto` - Definicion del servicio gRPC

## Instalacion

```bash
npm install
```

## Ejecutar

Terminal 1 - Microservicio Auth:

```bash
npm run start:dev auth
```

Terminal 2 - API Gateway:

```bash
npm run start:dev apigateway
```

## Endpoints

El API Gateway expone los siguientes endpoints REST que se comunican con el microservicio Auth via gRPC:

- `POST /users` - Crear usuario
- `GET /users` - Listar usuarios
- `GET /users/:id` - Obtener usuario
- `PATCH /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

## Servicios gRPC

Definidos en `proto/auth.proto`:

- CreateUser
- FindAllUsers
- FindOneUser
- UpdateUser
- RemoveUser
- QueryUser (streaming bidireccional)
