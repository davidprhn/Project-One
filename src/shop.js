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
        inputQuantity.setAttribute("id", "input-"+counter)

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
        shop.appendChild(card)
        counter++;
    });
}

function addToCart(element){
    main = document.getElementsByTagName("main")[0]
    shop = document.getElementById("shop")
    cart = document.getElementById("cart")
    subtotal = document.getElementById("subtotal")
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

        shopBody = document.createElement("div")
        shopBody.classList.add("shop-body")
        cart.appendChild(shopBody)

        subtotal = document.createElement("div")
        subtotal.classList.add("shop-subtotal")
        subtotal.setAttribute("id", "subtotal")
        cart.appendChild(subtotal)
    }
    input = document.getElementById("input-" + element.dataset.idPokemon)
    quantity = input.value
    if (quantity == ""){
        quantity = 0
    }

    brief = document.getElementById("pokemon-" + element.dataset.idPokemon)
    if (brief == undefined){
        createNewBrief(element, quantity)
    }else{
        modifyBrief(element, brief, quantity)
    }
    getTotal(subtotal)

}

function createNewBrief(element, quantity){
    brief = document.createElement("div")
    brief.classList.add("brief")
    brief.setAttribute('data-id-pokemon', element.dataset.idPokemon)
    brief.setAttribute('id', "pokemon-" + element.dataset.idPokemon)

    briefText = document.createElement("span")
    briefText.textContent = Objetos[element.dataset.idPokemon].name + " x "

    briefQuantity = document.createElement("span")
    briefQuantity.textContent =  quantity 

    briefEqual = document.createElement("span")
    briefEqual.textContent = " = "

    briefPricing = document.createElement("span")
    briefPricing.classList.add("prices")
    briefPricing.textContent = (parseFloat(Objetos[element.dataset.idPokemon].price) * parseInt(quantity))

    briefMoneyType = document.createElement("span")
    briefMoneyType.textContent = " €";

    brief.appendChild(briefText)
    brief.appendChild(briefQuantity)
    brief.appendChild(briefEqual)
    brief.appendChild(briefPricing)
    brief.appendChild(briefMoneyType)
    shopBody.appendChild(brief)
}

function modifyBrief(element, brief, newQuantity) {

    quantity = parseInt(brief.children[1].textContent) + parseInt(newQuantity)

    briefQuantity = brief.children[1]
    briefQuantity.textContent = quantity 

    briefPricing = brief.children[3]
    briefPricing.textContent = (parseFloat(Objetos[element.dataset.idPokemon].price) * parseInt(quantity))

}

function getTotal(DOMElement){
    total = 0;
    prices = [...document.getElementsByClassName("prices")]

    prices.forEach(element => {
        total += parseFloat(element.textContent)
    });
    DOMElement.textContent = "Total = " + total + " €"
}