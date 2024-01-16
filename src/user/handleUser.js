function User() {
 
  return Object.freeze({
    fetch, create
  });
   
  async function fetch(request) {
    return `Hello World From User Get ${  request.params.id}`;
  }
   
  async function create(request) {
    return `Hello World From User Post ${  request.params.id}`;
  }
}
module.exports = User;