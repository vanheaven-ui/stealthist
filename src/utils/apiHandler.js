const APIHandler = (() => {
  const baseEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/y51jDMzdzcuW1tIiJTYY/scores';
  const postData = async (url, dataObj) => {
    const response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    });
    return response.json();
  };

  const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
  };

  const modifyTime = (min, sec) => {
    let minInt = parseInt(min, 10);
    let secInt = parseInt(sec, 10);
    if (secInt >= 60 && minInt < 60) {
      minInt += Math.floor(secInt / 60);
      secInt = sec % 60;
    }
    return { min: minInt.toString(), sec: secInt.toString() };
  };
  return {
    postData, getData, modifyTime, baseEndPoint,
  };
})();

export default APIHandler;