## Phase 1 Project: NBA Team Search

NBA Team search is a one page application where the user can type in a team name in the search bar. This triggers a function that filters using (.filter)the team you search for then creates a card using (.find(team)). So whatever team matches the filter the createTeamCard() will trigger creating that card.

This can display any info about the team that the API offers. Using two even liseners ('mouseover' and 'mouseleave') I have created a functions that will display differnt info depending on if you mouse is hovering over the card or not. There is also a button created that can be clicked to clear out the cards and allow the user to search for another card.

There are four event listeners ('DOMCONTENTLOADED','click', 'mouseover', 'mouseleave') that are triggering all the functionality of the page based on the users mouse interacting with the page.

There are using a db.json to pull our data from in order to give the pages functions content. The page connects the 3 pillars in order to accomplish the end goal for the user. Type a nba teams name into the search bar, and get a card that displays the information.
