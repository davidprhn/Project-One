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

    shop = document.createElement("article")
    shop.classList.add("shop")
    shop.setAttribute("id", "shop")
    main.appendChild(shop)

    counter=0;

    Objetos.forEach(element => {
        card = document.createElement("div")
        card.classList.add("card")

        cardImage = document.createElement("img")
        cardImage.classList.add("image-card")
        cardImage.src = element.image 
        cardImage.setAttribute("loading", "lazy")

        cardBody = document.createElement("div")
        cardBody.classList.add("body-card")

        cardText = document.createElement("div")
        cardText.classList.add("text-card")
        cardText.textContent = element.name

        price = document.createElement("div")
        price.classList.add("price-card")
        price.textContent = element.price + " €"

        inputQuantity = document.createElement("input")
        inputQuantity.classList.add("input-card")
        inputQuantity.setAttribute("type", "number")

        button = document.createElement("button")
        button.classList.add("button-card")
        button.textContent = "Add to cart"
        button.setAttribute('data-id-pokemon', counter)
        button.addEventListener("click", function (element) {
            addToCart(this)
        })

        cardBody.appendChild(cardText)
        cardBody.appendChild(price)
        cardBody.appendChild(inputQuantity)
        cardBody.appendChild(button)
        card.appendChild(cardImage)
        card.appendChild(cardBody)
        shop.appendChild(card)a  
        SVGDefsElement jas
        FileSystemFileHandlez adsasd
        counter++;
    });
}

function addToCart(element){
    main = document.getElementsByTagName("main")[0]
    shop = document.getElementById("shop")
    cart = document.getElementById("cart")
    if ( cart == undefined){
        cart = document.createElement("div")
        cart.setAttribute("id", "cart")
        cart.classList.add("cart")
        shop.classList.add("w-70")
        main.appendChild(cart)
        title = document.createElement("div")
        title.classList.add("shop-title")
        title.textContent = "Shopping Cart"
        cart.appendChild(title)
    }

    brief = document.createElement("div")
    brief.classList.add("brief")
    brief.setAttribute('data-id-pokemon', element.dataset.idPokemon)
    briefText = document.createElement("span")
    briefText.textContent = Objetos[element.dataset.idPokemon].name
    brief.appendChild(briefText)
    cart.appendChild(brief)

}