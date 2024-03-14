function Pokemon(name, price, image) {
    this.image = image
    this.name = name
    this.price = price
}

var basePokemons = [
    { name: "Pikachu", price: 25, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { name: "Charmander", price: 15, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { name: "Bulbasaur", price: 14, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { name: "Squirtle", price: 16, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { name: "Dragonite", price: 54, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png" },
    { name: "Mewtwo", price: 63, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" },
    { name: "Mew", price: 100, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" }
]
var localPokemons = localStorage.getItem('Pokemons')
if (localPokemons == null) {
    localStorage.setItem("Pokemons", JSON.stringify(basePokemons));
    localPokemons = basePokemons
} else {
    localPokemons = JSON.parse(localPokemons)
}