module.exports = (error, requeste, response, next) => {
  response.sendStatus(500);
  console.log(error)
}
