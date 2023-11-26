let peopleNamesList = require('../country/state/city/index.js') 

let getFirstNamesFun = require('../utilities/utils/index.js')

let getPeopleInCity = peopleNamesList => {
  return getFirstNamesFun(peopleNamesList)
}

module.exports = getPeopleInCity
