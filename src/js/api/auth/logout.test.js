 //imports the function we are testing
import { logout } from './logout.js';

const mockLocalStorage = {
  removeItem: jest.fn(),
};

global.localStorage = mockLocalStorage;

// test: describe, it, expect
describe('logout', () => {
  it('clears the token from browser storage',  () => {
    logout();
    expect(localStorage.removeItem).toBeCalledWith('token');
  });
});


 
