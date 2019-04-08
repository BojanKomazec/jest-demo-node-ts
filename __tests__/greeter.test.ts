import {greeter} from '../src/modules/greeter';
 
test('greeter ', () => {
  expect(greeter("ABC")).toBe('Hello, ABC');
});
