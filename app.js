// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo.length == 0) {
        alert("Por Favor Inserte Un Nombre");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        actualizarAmigos();
    }
}
function actualizarAmigos() {
    let listaAmigosInput = document.getElementById("listaAmigos");
    listaAmigosInput.innerHTML = "";
    let listaAmigos = "";
   
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos += "<li>" + amigos[i] + "</li>";
    }
    listaAmigosInput.innerHTML = listaAmigos;
}