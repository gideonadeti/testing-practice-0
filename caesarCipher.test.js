import caesarCipher from './caesarCipher'

test('shifts characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd')
  expect(caesarCipher('xyz', 3)).toBe('abc')
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
  expect(caesarCipher('abc', 26)).toBe('abc') // no shift
  expect(caesarCipher('xyz', 0)).toBe('xyz') // no shift
})
