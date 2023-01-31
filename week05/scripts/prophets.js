const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json');
    const data = await response.json();
    console.table(data.prophets);
   displayProphets(data.prophets);
}
getProphetData();



  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank
      let paragraph = document.createElement('p');
      let paragraph2 = document.createElement('p')
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
      paragraph.textContent = `Date of Birth: ${prophet.birthdate}`;
      paragraph2.textContent= `Place of Birth: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(paragraph);
      card.appendChild(paragraph2);
      card.appendChild(portrait);
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }