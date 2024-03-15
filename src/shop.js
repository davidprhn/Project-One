window.addEventListener("load", (event) => {
   mostrarProductos()

})

function mostrarProductos(){
    main = document.getElementsByTagName("main")[0]

    shop = document.createElement("article")
    shop.classList.add("shop")
    shop.classList.add("w-70")
    shop.setAttribute("id", "shop")
    main.appendChild(shop)

    counter=0;

    localPokemons.forEach(element => {
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

        cartPart = document.createElement("div")
        cartPart.classList.add("cart-part")

        price = document.createElement("div")
        price.classList.add("price-card")
        price.textContent = element.price + " €"

        inputQuantity = document.createElement("input")
        inputQuantity.classList.add("input-card")
        inputQuantity.setAttribute("type", "number")
        inputQuantity.setAttribute("value", 0)
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
        cartPart.appendChild(inputQuantity)
        cartPart.appendChild(button)
        cardBody.appendChild(cartPart)
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
    input = document.getElementById("input-" + element.dataset.idPokemon)
    quantity = input.value
    if (quantity != 0) {
  
        if ( cart == undefined){
        cart = document.createElement("div")
        cart.setAttribute("id", "cart")
        cart.classList.add("cart")
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


        brief = document.getElementById("pokemon-" + element.dataset.idPokemon)
        if (brief == undefined) {
            createNewBrief(element, quantity)
        } else {
            modifyBrief(element, brief, quantity)
        }
        getTotal(subtotal)
    }


    

}

function createNewBrief(element, quantity){
    brief = document.createElement("div")
    brief.classList.add("brief")
    brief.setAttribute('data-id-pokemon', element.dataset.idPokemon)
    brief.setAttribute('id', "pokemon-" + element.dataset.idPokemon)

    briefText = document.createElement("span")
    briefText.textContent = localPokemons[element.dataset.idPokemon].name + " x "

    briefQuantity = document.createElement("span")
    briefQuantity.textContent =  quantity 

    briefEqual = document.createElement("span")
    briefEqual.textContent = " = "

    briefPricing = document.createElement("span")
    briefPricing.classList.add("prices")
    briefPricing.textContent = (parseFloat(localPokemons[element.dataset.idPokemon].price) * parseInt(quantity))

    briefMoneyType = document.createElement("span")
    briefMoneyType.textContent = " €";

    briefDeleteButton = document.createElement("button")
    briefDeleteButton.textContent = "X";
    briefDeleteButton.setAttribute('data-id-pokemon', [element.dataset.idPokemon])
    briefDeleteButton.classList.add("delete-button")
    briefDeleteButton.addEventListener("click", function (element) {
        removeItem(this)
    })
    brief.appendChild(briefText)
    brief.appendChild(briefQuantity)
    brief.appendChild(briefEqual)
    brief.appendChild(briefPricing)
    brief.appendChild(briefMoneyType)
    brief.appendChild(briefDeleteButton)
    shopBody.appendChild(brief)
}

function modifyBrief(element, brief, newQuantity) {

    quantity = parseInt(brief.children[1].textContent) + parseInt(newQuantity)

    briefQuantity = brief.children[1]
    briefQuantity.textContent = quantity 

    briefPricing = brief.children[3]
    briefPricing.textContent = (parseFloat(localPokemons[element.dataset.idPokemon].price) * parseInt(quantity))

}

function removeItem(element) {
    brief = document.getElementById("pokemon-" + element.dataset.idPokemon)
    brief.remove();
    subtotal = document.getElementById("subtotal")
    getTotal(subtotal)
}

function getTotal(DOMElement){
    total = 0;
    prices = [...document.getElementsByClassName("prices")]

    prices.forEach(element => {
        total += parseFloat(element.textContent)
    });
    if(total <= 0){
        cart = document.getElementById("cart")
        cart.remove()
    }else{
        DOMElement.textContent = "Total = " + total + " €"
    }
}