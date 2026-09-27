
async function getUsers() {                                      // Creamos una función asíncrona
    try {                                                        // Intentamos ejecutar la petición

        const response = await fetch(                            // Esperamos la respuesta de la API
            "https://jsonplaceholder.typicode.com/users"
        );

        const users: { name: string }[] = await response.json(); // Convertimos la respuesta a JSON

        console.log(users);                                      // Mostramos los usuarios en consola

        users.forEach((user) => {                                // Recorremos cada usuario
            const paragraph = document.createElement("p");      // Creamos un elemento <p>
            paragraph.textContent = user.name;                   // Colocamos el nombre del usuario
            document.body.appendChild(paragraph);               // Mostramos el nombre en pantalla
        });

    } catch (error) {                                            // Capturamos un posible error
        console.error(error);                                    // Mostramos el error en consola
    }
}

getUsers();                                                      // Ejecutamos la función