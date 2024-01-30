document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click', searchTeams)
})
  
  const teamSearch = document.getElementsByClassName('search-team')
  const teamDataUrl = "http://localhost:3000/data"
  const currentTeams = document.getElementById('current-teams')
  const teamInput = document.getElementById('searchInput')
  const cardDelete = document.createElement('button')
  cardDelete.textContent = 'Clear Teams'
  cardDelete.className = 'delete'
  
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
  
    cardDelete.addEventListener('click', () => {
      currentTeams.innerHTML = ''
    })
  
    currentTeams.append(card, cardDelete)
  }