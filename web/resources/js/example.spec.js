import { logMessage } from './index'

test('`logMessage` should return a greeting containing the name is receives', () => {
  expect(logMessage(`Human`)).toBe("Hey Human, it's good to see you!")
})
