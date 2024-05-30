import analyzeArray from './analyzeArray'

test('analyzes an array of numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
  expect(analyzeArray([5, 5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 5
  })
  expect(analyzeArray([10, -10, 10, -10])).toEqual({
    average: 0,
    min: -10,
    max: 10,
    length: 4
  })
})
