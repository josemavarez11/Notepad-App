const Fercho = async ({ endpoint, method, body, headers }) => {
  const configPost = {
    method: "POST",
    credentials: "include",
    cors: "cors",
    headers: headers,
    body: JSON.stringify(body),
  };

  const configPut = {
    method: "PUT",
    credentials: "include",
    cors: "cors",
    headers: headers,
    body: JSON.stringify(body),
  };

  const configGet = { method: "GET", credentials: "include", cors: "cors" };

  const configDelete = { method: "DELETE", credentials: "include", cors: "cors" };
  
  const methodLower = method.toLowerCase();
  var config;
  switch (methodLower) {
    case "post":
      config = configPost;
      break;
    case "put":
      config = configPut;
      break;
    case "get":
      config = configGet;
      break;
    case "delete":
      config = configDelete;
      break;
  }

  try {
    const urlBase = 'https://notepad-api-dev-hsee.3.us-1.fl0.io'//save this in .env file.
    const response = await fetch(urlBase+endpoint, config);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(`Error en fetch, donde la url era ${url} y el error fue ${error.message}`);
  }
};
  
export default Fercho;