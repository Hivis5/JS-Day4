async function getCountries() {
  let url = "https://restcountries.com/v3.1/all";
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderCountries() {
  let countries = await getCountries();
  let html = '';
  countries.forEach(country => {
      let htmlSegment = `<div class="user">
      <h2>${country.name.common}</h2>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>           
        <img src="${country.flags.png}" >
        <hr/>   
      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderCountries();