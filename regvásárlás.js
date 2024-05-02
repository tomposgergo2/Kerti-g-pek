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
    const dátumValue = new Date(dátum.value)

    if (emailValue == "" || jelszóValue == "" || címValue == "" || dátumValue =="") {
        return document.getElementById("figyelem").innerHTML = `<p style = "color: red"> Minden mező kitöltése kötelező </p>`
    }
    if (jelszóValue.length < 8) {
        return document.getElementById("figyelem").innerHTML =  `<p style = "color: red"> Minimum 8 kararakternek kell lennie a jelszónak</p>`
    }
    if (emailValue.length < 5 || !emailValue.includes('@') || !emailValue.includes('.')) {
        return figyelem.innerHTML = `<p style="color: red;">Az email címnek legalább 5 karakter hosszúnak kell lennie, tartalmaznia kell '@' jelet és '.' jelet</p>`;
    }
    if (címValue.length < 5 || !címValue.includes("utca") || !/\d/.test(címValue)) {
        return figyelem.innerHTML = `<p style="color: red;">Érvényes címet adjon meg</p>`;
    }
    if (String(dátumValue.getFullYear()).length != 4) {
        return figyelem.innerHTML = `<p style="color: red;">Érvényes évszámot adjon meg</p>`;
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
        const formattedDate = new Date(dátum).toLocaleDateString('hu-HU');


        const sor = document.createElement("div")
        sor.innerHTML = `<b>A felhasználó adatai:</b> Email: ${email} Jelszó: ${jelszó} Cím: ${cím} dátum: ${formattedDate} `
        megjelenítés.appendChild(sor)
        alert("Regisztráció és vásárlás felvétele sikeresen megtörtént")
        
    }

    
}

gombocska.addEventListener("click", kiírat)