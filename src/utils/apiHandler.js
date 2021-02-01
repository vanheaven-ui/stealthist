const APIHandler = (() => {
  const postEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const getEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameData = { name: 'stealthist' };
  const initData = {
    mode: 'cors',
    method: 'POST',
    header: {
      COntent_Type: 'application/json',
    },
    body: JSON.stringify(data)
  }
 
  const postData = async(Uurl, data) => {
    const response = await fetch(url, initData)
    .then(res => res.json())
    .then(data => consol.log(data));

    return response;
  };

  const getData = async(url) => {
    const response = await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
  };

  return { postData, getData };
})();

export default APIHandler;