const { generateShortIds } = require('./')

describe('generateShortIds', () => {
  it('should create a shortId prop to the given id', () => {
  	// Testing for each layer of nesting in first element and first layer of second element
    expect(generateShortIds("a6e5dc32-1c6c-11e9-ab14-d663bd873d93")[0])
      .toHaveProperty("shortId", 'a6e')
    expect(generateShortIds("34271080-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0])
      .toHaveProperty("shortId", '342')
    expect(generateShortIds("34271332-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0]["skuData"])
      .toHaveProperty("shortId", '347')
    expect(generateShortIds("342718a0-1c6c-11e9-ab14-d663bd873d93")[1])
      .toHaveProperty("shortId", '341')      
  });

  it('should create shortId to all object with an existing id prop', () => {
    const answer = [
      {
        name: 'Running Shoes',
        id: 'a6e5dc32-1c6c-11e9-ab14-d663bd873d93',
        shortId: 'a6e',
        items: [
          {
            name: 'Pegasus',
            id: '34271080-1c6c-11e9-ab14-d663bd873d93',
            shortId: '342',
            skuData: {
              name: 'Size 8',
              id: '34271332-1c6c-11e9-ab14-d663bd873d93',
              shortId: '347',
            }
          },
          {
            name: 'Epic React',
            id: '3427174c-1c6c-11e9-ab14-d663bd873d93',
            shortId: '341',
            skuData: {
              name: 'Size 8',
              id: 'a6e5e470-1c6c-11e9-ab14-d663bd873d93',
              shortId: 'a65',
            }
          }
        ]
      },
      {
        name: 'Yoga Pants',
        id: '342718a0-1c6c-11e9-ab14-d663bd873d93',
        shortId: '348',
        items: [
          {
            name: 'The Black Ones',
            id: '4ea2f9ce-1c6c-11e9-ab14-d663bd873d93',
            shortId: '4ea'
          }   
        ]
      }
    ]
    expect(generateShortIds())
      .toEqual(answer)
  });
})