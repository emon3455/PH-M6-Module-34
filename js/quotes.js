const generateQuotes =()=>{
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data=> displayQuotes(data))
}

const displayQuotes = (data) =>{
    const container = document.getElementById("quotes-Container");

    container.innerHTML= `
        <h3>
        ${data.quote}  
        </h3>
        <p>
        -By Kanye west
        </p>
    `;

}

generateQuotes();