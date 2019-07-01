const isPrime = require("../handlers/isPrime")

exports.homePage = (req, res) => {
  res.render("main")
}

exports.searchNumbers = async (req, res) => {
  const firstNumber = parseInt(req.query.firstNumber)
  const secondNumber = parseInt(req.query.secondNumber)
  const result = isPrime.generatePrime(firstNumber, secondNumber)

  res.json(result)
}
