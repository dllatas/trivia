# Legacy Code Retreat

### First ideas
After executing the code and going trough it for the first time, some main issues are detected. One of these issues is that the current code has no separation of concerns. Some instances such as player, dice, questions and the actual code execution (run function), are all interleaved in the same file. At the same time, some functions are bigger than needed, and should be refactored to reuse code and make their intentions more clear.

Another features is the feature Penalty Box seems irrelevant to the game experience. Moreover, tThe function isPlayable is not used. Another issue is the lack of tests and linting.

Moreover, there are some questionable syntax and semantics in the code. Abuse of certain patterns such as "if" statements (instead of using objects, for instance). A lot of magic numbers, console printings and arrays being accessed via indexes everywhere!

### To do
- Improve separation of concerns
- Refactor large functions
- Implement automatic testing and linting
- Refactor bad syntax patterns 


Test with node.js
=================

1. Install the dependencies with this command: `npm install`
2. Run the tests with this command: `npm test`

    Any test source matching the pattern *.spec.js will be executed.
