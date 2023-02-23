const loadData=(foodText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`
    fetch(url)
    .then(res => res.json())
    .then(data=> displFish(data.meals))
}

const displFish=(data)=>{

    const container = document.getElementById("food-container");
    container.innerHTML="";

    data.forEach(element => {

       const div = document.createElement("div");
       div.classList.add("col");
       div.innerHTML=`
        <div class="card h-100">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
        </div>
        </div>
       `;
       container.appendChild(div);

    });

}


const searchFood=()=>{
    const inputValue = document.getElementById("search-Input").value;
    loadData(inputValue);
}

loadData("fish");