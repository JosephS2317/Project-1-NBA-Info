//First event listener Make sure HTML page elements are loaded before any JS is run
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click', searchTeams)
})
  // declaring my variables on the global scope so no errors arrise when calling to them
  const teamSearch = document.getElementsByClassName('search-team')
  const teamDataUrl = "http://localhost:3000/data"
  const currentTeams = document.getElementById('current-teams')
  const teamInput = document.getElementById('searchInput')
  const cardDelete = document.createElement('button')
  cardDelete.textContent = 'Clear Teams'
  cardDelete.className = 'delete'

// creating my function which is called back in my original click even listener for the search button
// function fetching the data in my db.json, converting to readable json, then using iterators to find the data im looking for
  function searchTeams() {
    fetch(teamDataUrl)
      .then((res) => res.json())
      .then((teams) => {
        const foundTeams = teams.filter((team) => team.name.toLowerCase()===(teamInput.value.toLowerCase()))
        foundTeams.find((team) => {
          createTeamCard(team)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
// function which is called back by my searchTeams function
// this function uses the data that we got through our iterators and creates the "card" to display that information on and appends it to our html element 'currentTeams'
// lastly once the function is complete it ends by clearing out the search bar by changing the inner html of the searchInput to blank
  function createTeamCard(team) {
    const card = document.createElement('div')
    card.className = 'card'
  
    const name = document.createElement('h1')
    name.textContent = team.name;
  
    const logo = document.createElement('img')
    logo.className = 'logo'
    logo.src = team.logo
  
    const city = document.createElement('h2')
    city.textContent = team.city

    const hoverPrompt = document.createElement('footer')
    hoverPrompt.textContent = 'Hover Mouse for additional info'
  
   
    card.append(city, name, logo, hoverPrompt)
    const originalCard = card.innerHTML
    teamInput.value = ''

   // two additional event listeners to manipulate the dom based on your mouses interaction with card being created
   // when mouse is hovered over the card it displays different information then when taken off it goes back to its original content.
    card.addEventListener('mouseover', function() {
      
          card.innerHTML = `
            <h2>${team.full_name}</h2>
            <h2>Division: ${team.division}</h2>
            <h2>Conference: ${team.conference}</h2>
          `
        
    })
  
    card.addEventListener('mouseleave', function() {
      card.innerHTML = originalCard
    })
  // delete button that is created with the card, this allows for the user to delete the card when done reading then search for a new team.
    cardDelete.addEventListener('click', () => {
      currentTeams.innerHTML = ''
    })
  
    currentTeams.append(card, cardDelete)
  }