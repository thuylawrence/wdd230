const url = 'https://github.com/thuylawrence/wdd230/blob/main/chamber/data/members.json';
const cards = document.querySelector('#companycards');

async function getMembersData() {
    const response = await fetch('https://github.com/thuylawrence/wdd230/blob/main/chamber/data/members.json');
    const data = await response.json();
    console.table(data.members);
   displayMembers(data.members);
}
getMembersData();



  const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let companyName = document.createElement('h2'); // fill in the blank
      let paragraph = document.createElement('p');
      let paragraph2 = document.createElement('p')
      let link = document.createElement('p')
      let image = document.createElement('img');
  
      // Build the h2 content out to show the company's name
      companyName.textContent = `${companies.companyName}`; // fill in the blank
      paragraph.textContent =  `${companies.addresses}`;
      paragraph2 = `${companies.image}`;
      link = `${companies.website}`;

      
      // Build the image portrait by setting all the relevant attributes
      image.setAttribute('src', companies.image);
      
  
      // Append the section(card) with the created elements
      card.appendChild(companyName); //fill in the blank
      card.appendChild(paragraph);
      card.appendChild(paragraph2);
      card.appendChild(portrait);
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }