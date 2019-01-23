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
    expect(invertedArrayMode(testCase.input))
      .toBe(testCase.expected)
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
    expect(invertedArrayMode())
      .toBe(testCase.expected)
  })
})