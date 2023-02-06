const url = 'https://raw.githubusercontent.com/thuylawrence/wdd230/main/chamber/data/members.json';
const cards1 = document.querySelector('.companycards');

async function getcompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
   displayacompanies(data.companies);
}
getcompanyData();



  const displayacompanies = (companies) => {
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let companyName = document.createElement('h2'); // fill in the blank
      let paragraph = document.createElement('p');
      let paragraph2 = document.createElement('p')
      let link = document.createElement('p')
      let image = document.createElement('img');
  
      // Build the h2 content out to show the company's name
      companyName.textContent = `${company.companyName}`; // fill in the blank
      paragraph.textContent =  `Address: ${company.addresses}`;
      paragraph2.textContent = `Telephone: ${company.phoneNumber}`;
      link.textContent = `${company.website}`;

      
      // Build the image portrait by setting all the relevant attributes
      image.setAttribute('src', company.image);
      
  
      // Append the section(card) with the created elements
      card.appendChild(companyName); //fill in the blank
      card.appendChild(paragraph);
      card.appendChild(paragraph2);
      card.appendChild(link);
      card.appendChild(image);
      cards1.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".companycards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
