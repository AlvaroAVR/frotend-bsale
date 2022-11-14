# Frontend Test Bsale
***
Pagina para tienda en linea de diferentes productos tales como licores, bebidas o snacks, la cual tiene un buscador para dichos productos.
***
![image](https://user-images.githubusercontent.com/101934732/201554967-77fee113-9cdb-4f1e-ac4a-7c0f56a1cd4f.png)

***
El buscador esta configurado para que pueda encontrar las coincidencias aunque solo se escriba una parte del nombre del producto y esta coincida con un producto, esto puede ser en el inicio, en medio o al final de la palabra.

Por ejemplo: al buscar 'isco', de todas maneras nos encontrara los productos que coincidan en este caso los piscos.

Tambien funciona clickeando la tecla enter para realizar la busqueda.

***
![image](https://user-images.githubusercontent.com/101934732/201555971-43658b10-3d92-4cbc-91cd-bdbeea961d98.png)
***
##  Tecnologias utilizadas: 
-Html
-Css
-Javascript
-Bootstrap

#### Backend:
-Java
-Spring

***

Para ver el repositorio el backend pueden revisar en mis repositorios o directamente en el siguiente link: https://github.com/AlvaroAVR/ApiRest-bsale

***

La Url base para poder conectarse con el api que proporcionara los datos es el siguiente https://apirest-bsale.herokuapp.com/api/v1/products
Dentro del codigo se creo una variable que complementara esta url para realizar la busqueda deseada, esta variable esta inicializada como 'todos' por lo que la url quedaria https://apirest-bsale.herokuapp.com/api/v1/products/todos 

Al realizar una peticion , se retornara los datos en formato Json de la siguiente manera.

![image](https://user-images.githubusercontent.com/101934732/201557404-9ed0aedc-5351-4170-aedf-3fbf548693fa.png)

Estos datos seran capturados por una funcion Async y utilizando fetch para capturar los datos y poder utilizarlos y mostrarlos en nuestra pagina web.
