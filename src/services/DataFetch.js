const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';

const dataFetch = () => fetch(ENDPOINT).then(res => res.json())

export {dataFetch};