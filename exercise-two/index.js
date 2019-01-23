const data = require('./data')

const uniqueShortIds = [];

function shortifyId(string) {
  for(i=2; i<string.length; i++)
  // ensure unique ID
  if (!uniqueShortIds.includes(string[0].concat(string[1], string[i]))) {
    uniqueShortIds.push(string[0].concat(string[1], string[i]));
    return string[0].concat(string[1], string[i]);
  }
}

const generateShortIds = (id) => {
  for (i=0; i<data.categories.length; i++) {
    if(data.categories[i]["id"] === id) {
      data.categories[i]["shortId"] = shortifyId(id);
      return data.categories;
    } else {
      for(j=0; j<data.categories[i]["items"].length; j++) {
        if (data.categories[i]["items"][j]["id"] === id) {
          data.categories[i]["items"][j]["shortId"] = shortifyId(id);
          return data.categories;
        } else if (data.categories[i]["items"][j]["skuData"] && data.categories[i]["items"][j]["skuData"]["id"] === id) {
          data.categories[i]["items"][j]["skuData"]["shortId"] = shortifyId(id);
          return data.categories;
        }
      }
    }
  }
  return data.categories;  
}

module.exports = {
  generateShortIds
}
