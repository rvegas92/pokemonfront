import axios from 'axios';

export async function fetchPokemons(limit = 10, offset = 0) {
  try {
    const { data } = await axios.get(`https://pokemonapi-qb2x.onrender.com/api/listar`, {
      params: { limit, offset }
    });
    return { results: data.result };
  } catch (error) {
    console.error("Error en fetchPokemons:", error);
    return { results: [] };
  }
}

export async function searchData(codigo) {
  try {
    const { data } = await axios.get(`https://pokemonapi-qb2x.onrender.com/api/busqueda/${codigo}`, {
      params: { codigo: codigo }
    });
    return { results: data.result };
  } catch (error) {
    console.error("Error en searchData:", error);
    return { results: [] };
  }
}