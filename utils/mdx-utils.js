import { api } from '../services/api';

export const getPosts = async () => {
  try {
    // Fazendo a requisição uma vez
    const response = await api.get('/posts');

    // Verificando se os dados existem
    if (response.data) {
      return response.data;
    }

    // Caso não tenha dados, retorna um array vazio
    return [];
  } catch (error) {
    // Captura e exibe qualquer erro que ocorra na requisição
    console.error('Erro ao buscar os posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    // Fazendo a requisição uma vez
    const response = await api.get('/posts', {
      params: {
        id: `eq.${id}`,
      },
    });

    // Verificando se os dados existem
    if (response.data) {
      return response.data;
    }

    // Caso não tenha dados, retorna um array vazio
    return [];
  } catch (error) {
    // Captura e exibe qualquer erro que ocorra na requisição
    console.error('Erro ao buscar os posts:', error);
    return [];
  }
};
