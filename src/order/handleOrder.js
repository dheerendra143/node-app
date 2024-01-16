

function fetchData(request, res) {
  const response = {};
  response.body = {
    'message': `Hello World From Order Get ${ 
      request.params.id}`
  };
  response.type = 'application/json';
  res.send(response);
}
function createData(request, res) {
  res.send(`Hello World From Order Post ${  request.params.id}`);
}


module.exports = { createData, fetchData };