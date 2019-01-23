const { generateShortIds } = require('./')

describe('generateShortIds', () => {
  it('should create a shortId prop to the given id', () => {
  	//Testing for each layer of nesting in first element and second element
    expect(generateShortIds("a6e5dc32-1c6c-11e9-ab14-d663bd873d93")[0])
      .toHaveProperty("shortId", 'a6e')
    expect(generateShortIds("34271080-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0])
      .toHaveProperty("shortId", '342')
    expect(generateShortIds("34271332-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0]["skuData"])
      .toHaveProperty("shortId", '347')
    expect(generateShortIds("342718a0-1c6c-11e9-ab14-d663bd873d93")[1])
      .toHaveProperty("shortId", '341')      
  })

  // it('should create shortId to all object with an existing id prop', () => {
  //   expect(generateShortIds())
  //     .toBe(undefined)
  // })
})