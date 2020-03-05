import { greet } from "./myFunction";

describe('My Function', () => {
  it('should greet', () => {
    const expectedName = 'Jose'
    const result = greet(expectedName);
    expect(result).toContain(expectedName);
  });
});
