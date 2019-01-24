const data = require('./data')
 
const uniqueShortIds = [];  

function shortifyId(string) {
  for(k=2; k<string.length; k++)
  // ensure unique ID
  if (!uniqueShortIds.includes(string[0].concat(string[1], string[k]))) {
    uniqueShortIds.push(string[0].concat(string[1], string[k]));
    return string[0].concat(string[1], string[k]);
  }
}

const generateShortIds = (data, id) => {
  if (id) {
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

  } else if (!id) {
    for (i=0; i<data.categories.length; i++) {
      if(data.categories[i]["id"] && !data.categories[i]["shortId"]) {
	    data.categories[i]["shortId"] = shortifyId(data.categories[i]["id"]);
	    for(j=0; j<data.categories[i]["items"].length; j++) {
	      if (data.categories[i]["items"][j]["id"] && !data.categories[i]["items"][j]["shortId"]) {
            data.categories[i]["items"][j]["shortId"] = shortifyId(data.categories[i]["items"][j]["id"]);
          }
	      if (data.categories[i]["items"][j]["skuData"] && data.categories[i]["items"][j]["skuData"]["id"] && !data.categories[i]["items"][j]["skuData"]["shortId"]) {
	        data.categories[i]["items"][j]["skuData"]["shortId"] = shortifyId(data.categories[i]["items"][j]["skuData"]["id"]);  
	      }
        }  		     
      }  
    } 
  }
  return data.categories;  
}

module.exports = {
  generateShortIds
}
