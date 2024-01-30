## Phase 1 Project: NBA Team Search

NBA Team search is a one page application where the user can type in a team name in the search bar. This triggers a function that filters using (.filter)the team you search for then creates a card using (.find(team)). So whatever team matches the filter the createTeamCard() will trigger creating that card.

This can display any info about the team that the API offers. Using two even liseners ('mouseover' and 'mouseleave') I have created a functions that will display differnt info depending on if your mouse is hovering over the card or not. There is also a button created that can be clicked to clear out the cards and allow the user to search for another card.

There are four event listeners ('DOMCONTENTLOADED','click', 'mouseover', 'mouseleave') that are triggering all the functionality of the page based on the users mouse interacting with the page.

From a user interface stand point it is very straight forward, you see a search bar that prompts you with its place holder to type in an nba team by its name (EX: bulls,cavaliers,lakers). When you hit search it creates a card that appears on the screen which has a small prompt at the bottom to let the user know to hover the mouse for additional info. Also created is a button at the bottom of the page that can be used to clear off the team and search a new team. The goal was to create something clean, user friendly, and readable.
