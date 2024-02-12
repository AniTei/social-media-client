//imports the function we are testing
import { login } from "./login.js";

// lesson 3.2
const TEST_USERNAME = "navnnavnesen@stud.noroff.no";
const TEST_PASSWORD = "Password123";

// Create a mock function, pretend to be the native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue("exampleToken123")
});

// Assign this to the global fetch function
global.fetch = mockFetchSuccess;

//localStorage setup found at: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };

//Assing to global local storage
global.localStorage = mockLocalStorage;

// test: describe, it, expect
describe("login", () => {
  it("stores token in browser", async () => {
    const data = await login(TEST_USERNAME, TEST_PASSWORD);
    expect(localStorage.getItem).toBeCalledWith('token');
  })
}); 
