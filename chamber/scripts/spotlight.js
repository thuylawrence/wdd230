let datafile = 'data/members.json';
// const cards1 = document.querySelector('.companycards');

async function getcompanyData() {
    const response = await fetch(datafile);
    const data = await response.json();
    // console.table(data.companies);
    pickdata(data.companies);
}
getcompanyData();


function pickdata (companies) {
    var length = companies.length;
    var final = [];
    while (final.length <3) {
      var random = Math.floor(Math.random() * length);
      if ((companies[random].membershipLevel == "Gold Membership" || companies[random].membershipLevel == "Silver Membership") && final.indexOf(companies[random]) == -1) {
          final.push(companies[random]);
      }
    }
    chooseCompanies(final);
  }
function chooseCompanies(items) {
     
     let i = 0;
     const p = document.querySelectorAll(".p");
     const t = document.querySelectorAll(".t");
     const d = document.querySelectorAll(".d");
    
    items.forEach(item => {
        p[i].setAttribute('src', item.image);
        t[i].innerHTML = item.companyName;
        d[i].innerHTML = item.addresses;
        i++;
    });
  }
  
