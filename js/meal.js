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
            <button onclick="showMoreInfo('${element.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodDetails">
                Details
            </button>

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


const showMoreInfo=(idmeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayMoreInfo(data.meals[0]))
}

const displayMoreInfo=(data)=>{
    console.log(data);
    document.getElementById("exampleModalLabel").innerText = data.strMeal;
    const body=document.getElementById("meal-thum");
    body.innerHTML=`
        <img src="${data.strMealThumb}" class="img-fluid" alt="...">
        <p class="card-text">
            <strong>Price: </strong> ${data.idMeal}
        </p>
    `
}



loadData("fish");