# TP2-BE-GRUPO5


---  Pelicula 

 [POST]    http://localhost:3000/peliculas  (Le pasas por body titulo,anio,director,genero)

 [GET]     http://localhost:3000/peliculas  (getAllPeliculas no le pasas nada)

 [DELETE]   http://localhost:3000/peliculas (Le pasamos el titulo por Body)

 [GET]      http://localhost:3000/peliculas/:titulo     (le pasamos el nombre de la pelicula por parmas)

[PUT]        http://localhost:3000/peliculas/:id  (Por body le mandamos todos los campos de la pelicula)



---------------------------------------------------------

--- Sucursal
[POST]    http://localhost:3000/sucursales    (le pasamos todos los campos por body)

[GET]     http://localhost:3000/sucursales  (Te trae todas las sucursales)

[GET]  http://localhost:3000/sucursales/:nombre  (Le pasamos el nombre y te trae la sucursal)

[PUT] http://localhost:3000/sucursales/:id   (Le pasamos el id por param y nombre,calle,altura y localidad por el body)

[DELETE] http://localhost:3000/sucursales/:nombre   (Le pasamos el nombre por param) 




---------------------------------------------------------------

-- PeliculaSucursal


[POST] http://localhost:3000/sucursales/agregarPelicula (Le pasamos por body nombre de la sucursal y el titulo de la pelicula)

[GET] http://localhost:3000/sucursales/listarPeliculas/:id  (Le pasamos por parametro el id de la Sucursal)

[DELETE]  http://localhost:3000/sucursales/eliminarPelicula/:id (Le pasamos el id de la Sucursal por parametro, y el titulo de la pelicula por el body)

sucursalesRoutes.delete("/eliminarPelicula/:id",peliculasSucursalesController.deletePeliculasFromSucursal)


 



