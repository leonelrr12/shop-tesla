# Next.js Tesla Shop
Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

* El -d, significa __detached

* MongoDB URL Local:
```
mongodb://localhost:27017/tesladb
```

* Reconstruir los módulos de node y levantar Next
```
yarn install
yarn dev
```

## Configurar las variables de entornp
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de datos con información de pruebas

* Llamara:
``` 
http://localhost:3000/api/seed
```