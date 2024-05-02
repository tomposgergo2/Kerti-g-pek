import { Termék } from "./termék.js";
import data from "./data.js";

const termékek = Termék.feltöltadat(data);
let végösszeg = 0;

const updateVégösszeg = () => {
    const végösszegElem = document.getElementById('végösszeg');
    végösszegElem.innerHTML = `Végösszeg: ${végösszeg} Ft`;

    const kosárGombElem = document.getElementById('kosárGomb');

    if (végösszeg > 0) {
        kosárGombElem.style.display = 'block';
    } else {        
        kosárGombElem.style.display = 'none';
    }
};

updateVégösszeg();

document.querySelectorAll('.toCart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const kiválasztottTermék = termékek[index];
        const kosárElem = document.getElementById('kosár');

        if (kosárElem.textContent.includes(kiválasztottTermék.név)) {
            alert("Ez a termék már a kosárban van!");
            return; //idei kell a return mert kétszer teszi beele a kosarba
        }

        const újElem = document.createElement('div');
        újElem.innerHTML = `${kiválasztottTermék.név}: ${kiválasztottTermék.ár} Ft`;

        const törlésGomb = document.createElement('button');
        törlésGomb.textContent = 'Törlés';
        törlésGomb.style.backgroundColor = 'red';
        törlésGomb.style.color = 'white';
        törlésGomb.style.padding = '5px 10px';
        törlésGomb.style.border = 'none';
        törlésGomb.style.cursor = 'pointer';
        törlésGomb.style.marginLeft = '10px';
        törlésGomb.style.borderRadius = "5px";

        törlésGomb.addEventListener('click', () => {
            kosárElem.removeChild(újElem);
            végösszeg -= kiválasztottTermék.ár;
            updateVégösszeg();
        });

        újElem.appendChild(törlésGomb);
        kosárElem.appendChild(újElem);

        végösszeg += kiválasztottTermék.ár;
        updateVégösszeg();
    });
});










document.addEventListener('DOMContentLoaded', function () {
    var keresés = document.getElementById('keresés');
    var gombocska = document.getElementById('gombocska');

    gombocska.addEventListener('click', keresésNév);
    keresés.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            keresésNév();
        }
    });

    function keresésNév() {
        var keresésValue2 = keresés.value.trim().toLowerCase(); 
        var név = document.querySelectorAll('.card-title'); 

        név.forEach(function (terméknév) {
            var név2 = terméknév.textContent.trim().toLowerCase(); 

            if (név2.includes(keresésValue2)) { 
                terméknév.closest('.col-md-4').scrollIntoView({ behavior: 'smooth' }); 
                keresés.value = ''; 
            }
        });
    }
});


