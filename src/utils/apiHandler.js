const APIHandler = (() => {
  const postData = async(url, dataObj) => {
    const response = await fetch (url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
    return response.json();
  }

  const getData = async(url) => {
    const response = await fetch(url);
  
    return response.json();
  }

  const modifyTime = (min, sec) => {
    let minInt = parseInt(min);
    let secInt = parseInt(sec);
    if (secInt >= 60 && minInt < 60) {
      minInt += Math.floor(secInt / 60);
      secInt = sec % 60; 
    }
    return { min: minInt.toString(), sec: secInt.toString() };
  }

  return { postData, getData, modifyTime };
})();

export default APIHandler;