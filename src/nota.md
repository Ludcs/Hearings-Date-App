--Como cambiar el reduce para agrupar un array adentro de otro array--

1° extraer listado solo de las fechas ------- //devolver solo un array unicamente con las fechas
2° eliminar (.filter??) las fechas iguales ----- //es decir tener agrupadas todas las fechas que sean iguales
3° voy a tener por un lado listado de fechas (1° y 2°). Y por otro el resto de lo que me llega de la api
4° con los dos arrays , llegar a lo mismo que el reduce() ----- //{fecha: 20-4-2020, hearings: [nombre, hora]}

--Ultimos detalles--

1° UseCases: picker DESDE ponerlo en 1 de abril y el de HASTA en el 8 de abril. Despues poner el DESDE en el 12 de abril: se rompe! Solucionar eso.

2° Para estilar el picker: armar un input propio y asignarle de tipo "placeholder (?)" el value del picker. De éste solo usar la parte del calendar.

3° Revisar para entender: función que recibe date y type (1 o 2). NOTA: type vive solo dentro de dicha función!

4° Ver el diseño responsive de la app y si se quiere intentar igualarlo.

ALGUNAS ACLARACIONES:
°intentar no usar el splice() para recortar strings. SI para recortar arrays
°border bottom del ultimo item: para que no salga en el ultimo item, usar el dateArr.lenght en -1 y a ese no aplicarselo
°para estilar el picker o cualquier otro componente se puede usar un único .css que contenga esas excepciones. En el ej: index.css. Revisar las clases del picker con el inspector de la consola.
