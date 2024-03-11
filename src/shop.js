function Pokemon(name,price,image){
    this.image = image
    this.name = name
    this.price = price
}

const Objetos=[
    new Pokemon("Pikachu", 25,"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"), 
    new Pokemon("Charmander", 15,"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"), 
    new Pokemon("Bulbasaur", 14, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"), 
    new Pokemon("Squirtle", 16, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png")
]

window.addEventListener("load", (event) => {
   mostrarProductos()

})

function mostrarProductos(){
    main = document.getElementsByTagName("main")[0]
    counter=0;
    Objetos.forEach(element => {
        card = document.createElement("div")
        card.classList.add("card")
        cardImage = document.createElement("img")
        cardImage.classList.add("image-card")
        cardImage.src = element.image 
        cardBody = document.createElement("div")
        cardBody.classList.add("body-card")
        cardText = document.createElement("div")
        cardText.classList.add("text-card")
        cardText.textContent = element.name
        price = document.createElement("div")
        price.classList.add("price-card")
        price.textContent = element.price + " €"

        button = document.createElement("button")
        button.classList.add("button-card")
        button.textContent = "Add to cart"
        button.setAttribute('data-id-pokemon',counter)
        button.addEventListener("click", function (element) {
            addToCart(this)
        })

        cardBody.appendChild(cardText)
        cardBody.appendChild(price)
        cardBody.appendChild(button)
        card.appendChild(cardImage)
        card.appendChild(cardBody)
        main.appendChild(card)
        counter++;
    });
}

function addToCart(element){
    main = document.getElementsByTagName("main")[0]
    cart = document.getElementsByTagName("aside")[0];
    if ( cart == undefined){
        cart = document.createElement("aside")
        cart.classList.add("cart")
        main.parentNode.insertBefore(cart, main.nextSibling)

    }

    brief = document.createElement("div")
    brief.classList.add("brief")
    brief.textContent = Objetos[element.dataset.idPokemon].name
    cart.appendChild(brief)

}