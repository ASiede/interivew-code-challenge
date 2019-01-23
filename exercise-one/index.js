const data = require('./data')

const invertedArrayMode = (mode) => {
  const reversedData = data.slice().reverse();
  let finalData;
  if(mode === 'prod') {
    finalData = reversedData.map((string, index) => {
      return string.concat( '.js');
    })
  }
  if(mode === 'dev') {
    finalData = reversedData.map((string, index) => {
      return string.concat( '.test.js');
    })
  }
  return finalData;
}

module.exports = {
  invertedArrayMode
}
