Paw Incorporative

Versión 1 del Proyecto:


- Tenemos una página principal que presenta brevemente la compañía
- La compañía posee un centro de adopción y un centro de limpieza para el tratamiento de los animales.

- Centro de Adopción:

Desde este centro se registrar los nuevos perros y gatos de nuevo ingreso en el centro, con sus particulares características.

Todos los animales de nuevo registro necesitan obligatoriamente pasar por el centro de limpieza para luego poder ser adoptados. 

Cuando los animales pasan por el centro de limpieza son enviados al "Healthy", donde ya tienen la posibilidad de ser adoptados.





- Centro de Limpieza:

Este centro es el encargado de aplicar las acciones de tratamiento a los animales, puede aplicarselas a todos o a aquellos animales seleccionados

Luego de que se apliquen las acciones los animales podrían ser enviados nuevamente al centro de adopción para posteriores eventos.

- Bases de Datos empleando Json-Server:

Para el manejo de los datos referentes a las mascotas de la compañía se crearon 4 bases de datos:
1. cats.json ----> Run in port 3000
2. dogs.json   ----> Run in port 1000
3. .cleansing_cats.json  ----> Run in port 5000
3. .cleansing_dogs.json  ----> Run in port 7000

Las dos primeras almacenan los gatos y perros del centro de adopción, y las otras almacenan los gatos y perros del centro de limpieza.

- Bases de Datos empleando Json-Server:

Se renderizan aquellas mascotas que están listas para ser adoptadas

