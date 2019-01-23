const { invertedArrayMode } = require('./')

describe('invertedArrayMode', () => {
  it('should invert the list and append .js when in prod mode', () => {
  	const testCase = {
	  input: 'prod',
	  expected: [
	    'grass.js',
		'blue.js',
		'sky.js',
		'green.js',
		'mountain.js',
		'red.js'
		]
  	}
  	// Testing equality of individual element in array
    expect(invertedArrayMode(testCase.input)[0])
      .toBe(testCase.expected[0])
    // Testing equality of array  
    expect(invertedArrayMode(testCase.input))
      .toEqual(testCase.expected)  
  })

  it('should invert the list and append .test.js in dev mode', () => {
  	const testCase = {
	  input: 'dev',
	  expected: [
	    'grass.test.js',
		'blue.test.js',
		'sky.test.js',
		'green.test.js',
		'mountain.test.js',
		'red.test.js'
		]
  	}
  	// Testing equality of individual element in array
    expect(invertedArrayMode(testCase.input)[0])
      .toBe(testCase.expected[0])
    // Testing equality of array  
    expect(invertedArrayMode(testCase.input))
      .toEqual(testCase.expected)  
  })
})