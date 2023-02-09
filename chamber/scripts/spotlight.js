// let url = 'https://raw.githubusercontent.com/thuylawrence/wdd230/main/chamber/data/members.json';
// const cards1 = document.querySelector('.companycards');

async function getcompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
   displayacompanies(data.companies);
}
getcompanyData();


function pickdata () {
    var length = companies.length;
    var final = [];
    while (final.length <3) {
      var random = math.floor(math.random() * length) +1;
      if ((companies[random].membershipLevel == "Gold" || companies[random].membershipLevel == "Silver") && final.indexOf(companies[random]) == -1) {
          final.push(companies[random]);
      }
    }
    chooseCompanies(final);
  }
  function chooseCompanies(items) {
    console.log(items)
    items.forEach(item => {
        document.getElementById("p" + i).src = item.icon;
        document.getElementById("t" + i).innerHTML = item.name;
        document.getElementById("d" + i).innerHTML = item.description;
        i++;
    });
  }
  
