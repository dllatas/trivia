# Legacy Code Retreat

During my time in Blocket, I found myself looking up at a book by Michael Feathers, "Working effectively with Legacy Code". One of the main ideas in the book is to write enough tests to the legacy code before adding new features, so one avoids changing the code's behaviour and introducing new bugs. However, for this small codebase, I decided to understand the code and write a modular version. 

### Issues
- No separation of concerns
- No code reusability
- No tests
- Unused functions
- Anti - patterns, syntax and semantics
- Console printings everywhere
- Magic numbers!

### Solutions
- No separation of concerns: Split the code into modules and, to the best extend possible, write pure functions. (Purity got affected after implementing the output module).

- No code reusability: The logic flow of the main function was simplified, and the unnecesary branches were eliminated. The output module has a standard interface with emit. The original function that adds the player needed to be called as many times as players in the game. The current accepts an array of names, and initializes all of them at the same time. 

- No tests: Try to add tests to pump coverage up to 100%. However, testing the main function iteslf seems messy. Still room for improvement there.

- Unused functions: Add AirBnb linting style!

- Anti - patterns, syntax and semantics: Picking up a category based on the place ended up being less than 5 lines compared to an original messy "if-else" monster. Moreover, the for-loop inside the while made going to the next player for free. No more array checkings. Representing the players with an array of objects made it simpler compared to update several different arrays for each player property.

- Console printings everywhere: Implemented a module based on events that owns all the messages, and has a display function. The event emitters were exported to different modules.

- Magic numbers: Use constants instead in the modules. 

### Future work
- Change how the winner is chosen. Right now, the first player has the highest chance to win. The check for the winner should be at the end of round.
- The main function is still large. Further refactoring should be performed to enable testing.
- There is no documentation.
- The implementation could use better standards for function signatures and names.
- Automate running tests and lint when committing or pushing code.
- Internationalization could be easily done just by passing the messages in the output module as a parameter to the specific event based on the user language.

### Run
1. Run the code with this command: `npm start`

### Test with node.js

1. Install the dependencies with this command: `npm install`
2. Run the tests with this command: `npm test`

    Any test source matching the pattern *.spec.js will be executed.

### Lint
1. The first time, `npm run lint-fix`
2. Then, `npm run lint`
