const loadRandomCountry= () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => DisplayCountry(data))
}

const DisplayCountry=(data)=>{

    const countryContainer = document.getElementById("country-container");

    //console.log(data[0].cca2);
    data.forEach(countries => {

        const div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML=`
            <div class="img-container">
                <img class="img" src="${countries.flags.png}" alt="">
            </div>
            <div class="country-info">
                <h3>Name: ${countries.name.common}</h3>
                <p>Capital: ${countries.capital ? countries.capital:"No Capital"}</p>
                <button class="btn" onclick="displayMoreDetails('${countries.cca2}')">See more</button>
            </div>
            
        `;
        countryContainer.appendChild(div);

    });

}

const displayMoreDetails=(code)=>{
    // https://restcountries.com/v3.1/alpha/
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayMoreinfo(data[0]))

}

const displayMoreinfo=country=>{
    
    const container=document.getElementById("moreInfo");
    container.innerHTML=`
        <h3>Name: ${country.name.official}</h3>
        <h3>Flag: </h3>
        <img src="${country.flags.png}" alt="">
        <p><strong>Area</strong>: ${country.area}</p>
        <p><strong>Population: </strong>: ${country.population}</p>
    `;
}

loadRandomCountry();