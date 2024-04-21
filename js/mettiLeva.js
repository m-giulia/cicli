let slctSinistra = document.getElementById("slctSinistra");
let slctDestra = document.getElementById("slctDestra");

let arraySinistro = new Array ('Pippo','Pluto','Paperino','Topolino');
let arrayDestro = new Array('Clarabella', 'Fifi', 'Paperina', 'Minnie');

let ulSx = document.querySelector('.sx ul');
let ulDx = document.querySelector('.dx ul');
        

function generaOptions() {           

    slctSinistra.innerHTML = "<option value=''>Seleziona di qua</option>";
    slctDestra.innerHTML = "<option value=''>Seleziona di qui</option>";


    for ( let i = 0; i < arraySinistro.length; i++ ){
        slctSinistra.options.add(new Option(arraySinistro[i], i));
        let li = document.createElement('li');
        console.log(li);
        console.log(li);
        li.innerHTML = arraySinistro[i];
        ulSx.append(li);
    }
    for ( let i = 0; i < arrayDestro.length; i++ ){
        slctDestra.options.add(new Option(arrayDestro[i], i));
        let li = document.createElement('li');
        console.log(li);
        li.innerHTML = arrayDestro[i];
        ulDx.append(li);
    }
}

/* OPPURE
let i = 0;
while (  i < arraySinistro.length ){
    slctDestra.options.add(new Option (arrayDestro[i],i));
    i++;
} */

generaOptions();

function spostaADx() {
    arrayDestro.push(arraySinistro[slctSinistra.value]);
    arraySinistro.splice(slctSinistra.value, 1);
    ulSx.innerHTML = '';
    ulDx.innerHTML = '';
    generaOptions();
}
function spostaASx() {
    arraySinistro.push(arrayDestro[slctDestra.value]);
    arrayDestro.splice(slctDestra.value, 1);
    ulSx.innerHTML = '';
    ulDx.innerHTML = '';
    generaOptions();
}