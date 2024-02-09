This project is the course assignment for the coure Workflow at Noroff, fall 23 and spring 24. 

The project is configured to run Prettier an ESlint on commit.

The code is versioned, and branches have been used.

All known bugs have (not yet) been communicated in the Issues tab.

Tests are written for the project.
These are their workflow status badges:

1. The login function (unit) stores a token when provided with valid credentials

BADGE

2. The logout function (unit) clears the token from browser storage

BADGE



3. The user can log in with the login form with valid credentials

BADGE

4. The user cannot submit the login form with invalid credentials and is shown a message.

BADGE

5. The user can log out  with the logout button

BADGE



unit-tests branch, to do: 
- reread ca wording

The login function (unit) stores a token when provided with valid credentials

it (is provided with valid credentials) expect validation fx > 8 letters
it (stores a token) expect token to be put in local storage?

api? mock? No

Manual testing, able to log in w email and password from JS2, and found token in local storage

Not able to use the mouse though? , used tab??


The logout function (unit) clears the token from browser storage

yes it does, 


It (is told to log out) … expect token to be cleared from browser?


BOTH UNIT TESTS SHOULD PASS, BC THEY DO WHEN CHECKED MANUALLY


- find relevant functions/files


- create test files