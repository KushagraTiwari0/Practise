/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(response=>
    {
        if(!response.ok)
            throw new Error("Pokemon name or something else is wrong");
        return response.json();
    }
)
.then(data=>console.log(data.id))
.catch(error=>console.error(error));
*/



//Using Async and await

//fetchData();




async function fetchData() {
    try{

        const pokemonName=document.getElementById("pokemon-name").value.toLowerCase();

        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            if(!response.ok)
                throw new Error("Could not fetch")
            const data=await response.json()
            //console.log(data);
            const pokemonImage=data.sprites.front_default;
            const imageElement=document.getElementById("pokemon-image");
            imageElement.src=pokemonImage;
            imageElement.style.display="block";
    }
    catch(error){
        console.error(error)
    }
}