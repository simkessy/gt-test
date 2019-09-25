export const GameTimeAPI = async query => {
  const url = `https://mobile-staging.gametime.co/v1/search?q=${query}`;

  let data = await fetch(url);
  data = await data.json();

  return data;
};
