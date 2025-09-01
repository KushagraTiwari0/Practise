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



function checkinput(){

    const value=document.getElementById("pokemon-name").value;
    if(/^\d+$/.test(value))
    {
     return value;   
    }
    else if(/^[a-zA-Z]+$/.test(value))
    {
        return value.toLowerCase();
    }
    else
        return null;

}




//Without tailwind

/*
async function fetchData() {
    try{
        const pokemonName=checkinput();
        const errorMsg = document.getElementById("error-msg");
        const cardContainer = document.getElementById("pokemon-card");

        errorMsg.textContent = "";
        cardContainer.innerHTML = "";



        if (!pokemonName) {
            document.getElementById("error-msg").textContent =
            "❌ Please enter only numbers (ID) or only letters (name).";
            return;
        }

        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok)
            throw new Error("Could not fetch")


        const data=await response.json()

        

        const name=data.name;
        const id=data.id;
        const image=data.sprites.front_default;
        const types=data.types.map(t=>t.type.name).join(", ");
        const abilities=data.abilities.map(a=>a.ability.name).join(", ");
        const stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join("<br>");



        cardContainer.innerHTML=`
        <div style="
        border:1px solid #ccc;
        border-radius: 10px;
        padding: 15px;
        max-width: 250px;
        background: #f9f9f9;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        ">
         <h2 style="text-transform: capitalize;">${name} (#${id})</h2>
        <img src="${image}" alt="${name}" style="width: 150px; display:block; margin:auto;">
        <p><b>Type:</b> ${types}</p>
        <p><b>Abilities:</b> ${abilities}</p>
        <p><b>Stats:</b><br>${stats}</p>
      </div>
        `

            

        console.log(data);
        const pokemonImage=data.sprites.front_default;
        const imageElement=document.getElementById("pokemon-image");
        imageElement.src=pokemonImage;
        imageElement.style.display="block";
    }
    catch(error){
        console.error(error)
    }
}

*/


// With tailwind

async function fetchData() {
  const input = document.getElementById("pokemon-name").value.toLowerCase().trim();
  const errorMsg = document.getElementById("error-msg");
  const card = document.getElementById("pokemon-card");
  const title = document.getElementById("pokemon-title");
  const pokeId = document.getElementById("pokemon-id");
  const image = document.getElementById("pokemon-image");
  const typesContainer = document.getElementById("pokemon-types");

  errorMsg.textContent = "";
  card.classList.add("hidden"); // hide before showing new data

  if (!input) {
    errorMsg.textContent = "⚠️ Please enter a Pokémon name or ID.";
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!res.ok) throw new Error("Pokémon not found!");
    const data = await res.json();

    // Fill card content
    title.textContent = data.name.toUpperCase();
    pokeId.textContent = `#${data.id}`;
    image.src = data.sprites.other["official-artwork"].front_default;

    // Pokémon types
    typesContainer.innerHTML = "";
    data.types.forEach((t) => {
      const span = document.createElement("span");
      span.textContent = t.type.name;
      span.className =
        "px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium";
      typesContainer.appendChild(span);
    });

    // Show card
    card.classList.remove("hidden");
  } catch (err) {
    errorMsg.textContent = "❌ Pokémon not found!";
  }
}
