const myRequest = fetch("https://jsonplaceholder.typicode.com/users"); // Hacemos la petición a la API

myRequest
    .then((response) => {                                               // Recibimos la respuesta de la API
        return response.json();                                         // Convertimos la respuesta a JSON
    })
    .then((users: { name: string }[]) => {                              // Indicamos que users es un arreglo de usuarios
        console.log(users);                                             // Mostramos los usuarios en consola

        users.forEach((user) => {                                       // Recorremos cada usuario
            const paragraph = document.createElement("p");             // Creamos un elemento <p>
            paragraph.textContent = user.name;                          // Colocamos el nombre del usuario
            document.body.appendChild(paragraph);                       // Mostramos el nombre en pantalla
        });
    })
    .catch((error) => {                                                 // Capturamos un posible error
        console.error("Error fetching data:", error);                   // Mostramos el error en consola
    });