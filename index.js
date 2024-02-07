//First event listener Make sure HTML page elements are loaded before any JS is run, call back function to fetch our data upon page launch
document.addEventListener('DOMContentLoaded', () => {
    fetchTeamData()
    const searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click', () => {
      searchTeams()
    })
}) 
   // declaring my variables for my api data and a new array to store its  data for iteration
  const teamDataUrl = "http://localhost:3000/data"
  let teams = []
// declaring a variable for the user input globally so it can be called in mulitple functions
  const teamInput = document.getElementById('searchInput')

// creating our functinon that stores our fetched data into a new variable called "teams"
function fetchTeamData() {
  return fetch(teamDataUrl)
    .then((res) => res.json())
    .then((data) => {
      teams = data
      console.log("Team data fetch Successful!")
    })
    .catch((error) => {
      console.error(error)
    })
}
// our call back function to our 'click' event listener
function searchTeams() {
  const foundTeams = teams.filter((team) =>
    team.name.toLowerCase() === teamInput.value.toLowerCase()
  )
  foundTeams.find((team) => {
    createTeamCard(team)
  })
}
/*Once the data has been iterated through we use that team which is found
 and run it through our createTeamCard function which perform some DOM maniuplation to display the card.*/
  function createTeamCard(team) {
    const currentTeams = document.getElementById('current-teams')
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

    const cardDelete = document.createElement('button')
  cardDelete.textContent = 'Clear Teams'
  cardDelete.className = 'delete'
  
   
    card.append(city, name, logo, hoverPrompt)
    const originalCard = card.innerHTML
    teamInput.value = ''

   // two additional event listeners to manipulate the dom based on your mouses interaction with card being created
   // when mouse is hovered over the card it displays different information then when taken off it goes back to its original content.
    card.addEventListener('mouseover', () => {
      
          card.innerHTML = `
            <h2>${team.full_name}</h2>
            <h2>Division: ${team.division}</h2>
            <h2>Conference: ${team.conference}</h2>
          `
        
    })
  
    card.addEventListener('mouseleave', () => {
      card.innerHTML = originalCard
    })
  // delete button that is created with the card, this allows for the user to delete the card when done reading then search for a new team.
    cardDelete.addEventListener('click', () => {
      currentTeams.innerHTML = ''
    })
  
    currentTeams.append(card, cardDelete)

  }
