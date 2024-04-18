const email = document.getElementById("email")
const jelszó = document.getElementById("jelszó")
const cím = document.getElementById("cím")
const dátum = document.getElementById("dátum")
const gombocska = document.getElementById("gombocska")

adatok = []

function kiírat(event) {
    event.preventDefault()
    megjelenítés.innerHTML = ""

    const emailValue = email.value
    const jelszóValue = jelszó.value
    const címValue = cím.value
    const dátumValue = Number(dátum.value)

    if (emailValue == "" || jelszóValue == "" || címValue == "" || dátumValue =="") {
        return document.getElementById("figyelem").innerHTML = `<p style = "color: red"> Minden mező kitöltése kötelező </p>`
    }
    if (dátumValue < 2006) {
        return document.getElementById("figyelem").innerHTML =  `<p style = "color: red"> Minimum 18 évesnek kell lenni </p>`
    }
    if (emailValue != "" && jelszóValue != "" && címValue != "" && dátumValue   !="") {
        adatok.push({email: emailValue, jelszó: jelszóValue, cím: címValue, dátum: dátumValue})
        email.value = ""
        jelszó.value = ""
        cím.value = ""
        dátum.value = ""
        
        mentés(emailValue, jelszóValue, címValue, dátumValue)
        return document.getElementById("figyelem").innerHTML = `<p style = "background-color: rgb(155, 182, 76);
        color: white;
        font-weight: bold;
        height: 35px; 
        display: flex;  
        align-items: center;
        padding-left: 10px;
        border-radius: 60px 30px;"> Regisztráció és vásárlás felvétele sikeresen megtörtént</p>`
    }


    function mentés(email, jelszó, cím, dátum) {

        const sor = document.createElement("div")
        sor.innerHTML = `<b>A felhasználó adati:</b> Email: ${email} Jelszó: ${jelszó} Cím: ${cím} dátum: ${dátum} `
        megjelenítés.appendChild(sor)
        
    }
    
}

gombocska.addEventListener("click", kiírat)
