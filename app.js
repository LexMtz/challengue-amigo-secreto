// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo.length == 0) {
        alert("Por Favor Inserte Un Nombre");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    }
}