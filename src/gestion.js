document.getElementById("create-button").addEventListener("click", createPokemon)

function createPokemon() {
    newName = document.getElementById("input-name").value
    newPrice = document.getElementById("input-price").value
    newImage = document.getElementById("input-img").value

    localPokemons.push({ name: newName, price: newPrice, image: newImage })
    localStorage.setItem("Pokemons", JSON.stringify(localPokemons));
    alert("A new Pokemon has been registered")
}