const generaterandomUser =()=>{
    fetch("https://randomuser.me/api/?gender=female")
    .then(res => res.json())
    .then(data=> displayUser(data))
}

const displayUser = (data) =>{
    const container = document.getElementById("random-user");
    container.innerHTML=`
        <div class="image-container">
            <img class="img" src="${data.results[0].picture.medium}" alt="">
        </div>
        <div class="user-info">
            <h4 class="name">Name: ${data.results[0].name.title + " "+ data.results[0].name.first + " "+ data.results[0].name.last}</h4>
            <h4 class="gender">Gender: ${data.results[0].gender}</h4>
            <p class="location"> <b>Location: </b> ${data.results[0].location.city+", "+data.results[0].location.state+", "+data.results[0].location.country}</p>
        </div>
    `;

}

generaterandomUser();
