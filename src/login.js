document.getElementById("login-button").addEventListener("click",login)

function login(){
    button = document.getElementById("login-button")
    email = document.getElementById("input-email").value
    pass = document.getElementById("input-pass").value

    if(email=="pokeadmin@gmail.com" && pass=="root"){
        location.replace("http://127.0.0.1:5500/gestion/gestion.html")
    }else{
        alert("Invalid credentials")
    }
}