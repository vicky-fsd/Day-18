var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((data1) => {
  var countryCardsDiv = document.getElementById("countryCards");
  for (var i = 0; i < data1.length; i++) {
    console.log(data1[i]);
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("col", "mb-4");
    cardDiv.innerHTML = `
    <h5 class="card-title">${data1[i].name}</h5>
    <div class="card">
      <img src="${data1[i].flag}" class="card-img-top" alt="...">
      <div class="card-body">
        
        <p class="card-text">Region :${data1[i].region}</p>
        <p class="card-text">Sub Region :${data1[i].subregion}</p>
      </div>
    </div>`;
    countryCardsDiv.appendChild(cardDiv);
  }
});