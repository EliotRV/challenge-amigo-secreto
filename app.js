let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === "") return;

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    document.getElementById('listaAmigosDiv').classList.remove('hidden');

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    let asignaciones = amigos.slice();
    do {
        mezclar(asignaciones);
    } while (asignaciones.some((amigo, i) => amigo === amigos[i]));

    mostrarResultado(asignaciones);
}

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function mostrarResultado(asignaciones) {
    document.getElementById('resultadoDiv').classList.remove('hidden');

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${asignaciones[index]}`;
        resultado.appendChild(li);
    });
}