const reverse = require('./reverse.js');

describe('This test wants to reverse the string', () =>{

  test('Should reverse the string', () => {
    expect(reverse('thisIsATest')).toEqual('tseTAsIsiht')
  })
})