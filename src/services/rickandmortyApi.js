export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch characters';
      return res.json();
    });
};
