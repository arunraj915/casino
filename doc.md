Round 3. Technical Test B:  Please read the instructions mentioned below to start your Technical Test and share the Git URL of the code.

Test duration: 90 Mins.



Implement online casino according to the checklist below using react and material-UI:



Assignment: Using React and Material-UI implement online casino according to checklist

Difficulty: middle FE developer

Estimated time: 2-3h



- Configure Single-page application (SPA), using TypeScript. You might decide to use [Create React App](https://github.com/facebook/create-react-app) as the template

- Layout consists of three parts: header, content and footer

- Header Consists of

  - Company logo (or developer's name) on the left and balance + avatar on the right

  - Balance displays real balance in format $9.99 and is updated after each game.

  - Depending on the state user sees

  - Login button which opens a popup with form (email/password)

  - Avatar and logout button

  - User has to be persistent i.e. you should keep data (name, balance) in local storage

  - User can start playing as a guest but should be able to log in at any time

  - Content

  - Has table with game results.

  - Columns are id, slot 1-3, time.

  - Id and time are sortable both ways

  - Displays 10 rows per page

  - There is a button that starts a game i.e. opens a popup

  - Popup has 3 slots in the content part and 3 buttons in the button pane

  - When the user presses the first button - random symbols ♠, ♥, ♦, ♣ are displayed in slots

   - Each spin costs $2 from the balance

  - Thee different symbols XYZ does nothing

  - Each pair XXY XYX YXX adds $0.5 to the balance

  - Each three in row XXX adds $2 to the balance

  - ♠♠♠ adds $5 to the balance

  - User can't play in credit, so when he runs out of money the game is over

  - The second button is meant for debugging. It fakes ♠♠♠ spin

  - After each spin results are added to the table.

  - Third button closes the popup

  - Footer

  - Has your copyright



- Bonus: add fancy animation to spin

- Bonus: write a single test to check popup state

- Bonus: deploy the app to Heroku or any other service