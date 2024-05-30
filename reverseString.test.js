import reverseString from './reverseString'

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh')
  expect(reverseString('world')).toBe('dlrow')
  expect(reverseString('')).toBe('')
  expect(reverseString('a')).toBe('a')
})
