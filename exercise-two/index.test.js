const { generateShortIds } = require('./')
const {cloneDeep} = require('lodash')
const data = require('./data')

describe('generateShortIds', () => {
  let testData;
  beforeEach(() => {
    testData = cloneDeep(data);
  })

  it('should create a shortId prop to the given id', () => {
  	// Testing for each layer of nesting in first element and first layer of second element
    expect(generateShortIds(testData, "a6e5dc32-1c6c-11e9-ab14-d663bd873d93")[0])
      .toHaveProperty("shortId", 'a6e')
    expect(generateShortIds(testData, "34271080-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0])
      .toHaveProperty("shortId", '342')
    expect(generateShortIds(testData, "34271332-1c6c-11e9-ab14-d663bd873d93")[0]["items"][0]["skuData"])
      .toHaveProperty("shortId", '347')
    expect(generateShortIds(testData, "342718a0-1c6c-11e9-ab14-d663bd873d93")[1])
      .toHaveProperty("shortId", '341')      
  });

  it('should create shortId to all object with an existing id prop', () => {
    const answer = [
      {  
        name: 'Running Shoes',
        id: 'a6e5dc32-1c6c-11e9-ab14-d663bd873d93',
        shortId: 'a65',
        items: [
          {
            name: 'Pegasus',
            id: '34271080-1c6c-11e9-ab14-d663bd873d93',
            shortId: '340',
            skuData: {
              name: 'Size 8',
              id: '34271332-1c6c-11e9-ab14-d663bd873d93',
              shortId: '343',
            } 
          },
          {
            name: 'Epic React',
            id: '3427174c-1c6c-11e9-ab14-d663bd873d93',
            shortId: '344',
            skuData: {
              name: 'Size 8',
              id: 'a6e5e470-1c6c-11e9-ab14-d663bd873d93',
              shortId: 'a64',
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
    expect(generateShortIds(testData, null))
      .toEqual(answer)
  });
})