const actionHelpers = {
    checkStatus: (response) => {
      if (!response.ok) {
        let responseStatus = response.status;
        return response.json().then((err) => {
          err['status'] = responseStatus;
          throw err;
        });
      }
      return response;
    },
  
    // parseJSON: (response) => response.json(),
    parseJSON: (response) => {
        console.log(response)
      // Attach status to the parsed JSON object
      return response.json().then((data) => {
        data.status = response.status;
        return data;
      });
    },
  };
  
  export default actionHelpers;
  