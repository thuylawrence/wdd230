fetch('members.json').then(function (response) {
    return response.json();
  }).then(function(obj) {
    console.log(obj);
  
 })