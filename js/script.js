// Fetch the JSON data from the local data file
fetch('data/data.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const container = document.getElementById('profiles-container');

    // Limit the data to the top 5 players
    const topPlayers = data.slice(0, 5);  // Take the first 5 players from the data array

    // Loop through each top player and display their info
    topPlayers.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('profile');  // Add a class to style

      playerDiv.innerHTML = `
        <h2>${player.name}</h2>
        <p>Country: ${player.country}</p>
        <p>Age: ${player.age}</p>
        <p>Rank: ${player.rank}</p>
        <img src="${player.image}" alt="${player.name}" />
      `;

      container.appendChild(playerDiv);  // Add the player profile to the container
    });
  })
  .catch(error => console.log('Error fetching JSON:', error));
