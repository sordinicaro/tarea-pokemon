// # Ejecutar npm run dev y que muestre en la consola UN ARRAY con todos los pokemon que comiencen con b. 

// # Solo debe haber un index.js

// # npm run dev tiene que ejecutar al index.js

import dotenv from "dotenv"

dotenv.config()

const baseApi = process.env.BASE_API_URL
const version = process.env.VERSION_API
const pokemon = process.env.ENDPOINT_POKEMON

const getByLetter = async () => {
    try {
        const response = await fetch(baseApi + version + pokemon);

        if (!response.ok) {
            throw new Error("error to fetch");

        }

        const jsonPokemon = await response.json();
        const pokemons = jsonPokemon.results;
        const filterB = pokemons.filter((pokemon) => pokemon.name.startsWith("b"))

        console.log(filterB);

    } catch (error) {
        console.log(error);

    }

}

getByLetter();