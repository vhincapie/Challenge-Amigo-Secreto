let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo == "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(amigo);
  limpiarCampo();
  limpiarSorteo();
  mostrarAmigos();
}

function limpiarCampo() {
  document.querySelector("#amigo").value = "";
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (!verificarListaAmigo()) return;

  let lista = document.getElementById("resultado");
  lista.innerHTML = "";

  let numeroMaximo = amigos.length;
  let amigoResultado = Math.floor(Math.random() * numeroMaximo);

  let li = document.createElement("li");
  li.textContent = amigos[amigoResultado];
  lista.appendChild(li);
}

function verificarListaAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos agregados en la lista");
    return false;
  }
  return true;
}

function limpiarSorteo() {
  let lista = document.getElementById("resultado");
  lista.innerHTML = "";
}
