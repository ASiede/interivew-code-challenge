const data = require('./data');

const invertedArrayMode = (mode) => {
  const reversedData = data.slice().reverse();
  if (mode === 'prod') {
    for(i=0; i<reversedData.length; i++) {
      reversedData[i] = reversedData[i].concat('.js');
    }
  }
  if(mode === 'dev') {
    for(i=0; i<reversedData.length; i++) {
      reversedData[i] = reversedData[i].concat('.test.js');
    }
  }  
  return reversedData;
}

module.exports = {
  invertedArrayMode
}
