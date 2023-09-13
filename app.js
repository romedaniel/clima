let url = "https://api.openweathermap.org/data/2.5/weather";
let key = "58dcc63dac50cf7b441693d8584a5bc1";
// let ciudad = "salta";
let unidad = "metric";

let btnBuscar = document.querySelector(".busqueda button");
btnBuscar.addEventListener("click",()=>mostrarDatos());

async function verClima(ciudad){
    let respuesta = await fetch(`${url}?q=${ciudad}&appid=${key}&units=${unidad}&lang=es`);
    let datos = await respuesta.json();

    let descripcion = datos.weather[0].description;
    let icono = datos.weather[0].icon;
    let etapaDia = datos.weather[0].icon.slice(-1);

    if(etapaDia == "n") document.getElementById("card").className = "card-noche";
    else if(etapaDia == "d") document.getElementById("card").className = "card";

    document.querySelector(".ciudad").innerHTML = datos.name;
    document.querySelector(".temperatura").innerHTML = parseInt(datos.main.temp)+"ºc";
    document.querySelector(".humedad").innerHTML = parseInt(datos.main.humidity)+"%";
    document.querySelector(".viento").innerHTML = parseInt(datos.wind.speed)+"km/h";
    document.querySelector(".descripcion").innerHTML = descripcion;

    document.querySelector(".icono").innerHTML = 
    `
    <img src="https://openweathermap.org/img/wn/${icono}@4x.png" alt="icono"/>
    `;



    console.log(datos);
    console.log(icono);
}


function mostrarDatos(){
    let ciudad = document.querySelector(".busqueda input").value;
    verClima(ciudad);
}