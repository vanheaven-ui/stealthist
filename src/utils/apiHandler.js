const APIHandler = (() => {
  const postEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const baseGETEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CdISo1zrmscAtAtqHEmn/scores';
  const gameData = { name: 'stealthist' };
 
  const postData = async(url, data) => {
    const response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        COntent_Type: 'application/json',
      },
      body: JSON.stringify(data)
    })
    return response.json();
  };

  const getData = async(url) => {
    const response = await (await fetch(url));
  
    return response.json();
  }

  return { postData, getData };
})();

export default APIHandler;