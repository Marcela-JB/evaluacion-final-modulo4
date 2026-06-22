class GestorUsuarios {

constructor() {

this.usuarios = [];

this.cargarUsuarios();

}


// CARGAR API CON FETCH
async cargarUsuarios() {

try {

const respuesta =
await fetch(
"https://jsonplaceholder.typicode.com/users"
);

this.usuarios =
await respuesta.json();

console.log("Usuarios cargados:");
console.log(this.usuarios);

}
catch(error) {

console.log(
"Error al cargar usuarios",
error
);

}

}


// 1 LISTAR NOMBRES
listarNombres() {

this.usuarios.forEach(
usuario =>
console.log(usuario.name)
);

}


// 2 INFO BÁSICA
buscarInfoBasica() {

let nombre =
prompt("Ingrese nombre");

let usuario =
this.usuarios.find(
u =>
u.name.toLowerCase()
===
nombre.toLowerCase()
);

if (usuario) {

console.log("Username:", usuario.username);

console.log("Correo:", usuario.email);

}
else {

console.log(
"Usuario no encontrado"
);

}

}


// 3 DIRECCIÓN
buscarDireccion() {

let nombre =
prompt("Ingrese nombre");

let usuario =
this.usuarios.find(
u =>
u.name.toLowerCase()
===
nombre.toLowerCase()
);

if (usuario) {

console.log("Dirección:");

console.log(usuario.address);

}
else {

console.log("Usuario no encontrado");

}

}


// 4 INFO AVANZADA
buscarInfoAvanzada() {

let nombre =
prompt("Ingrese nombre");

let usuario =
this.usuarios.find(
u =>
u.name.toLowerCase()
===
nombre.toLowerCase()
);

if (usuario) {

console.log("Teléfono:", usuario.phone);

console.log("Sitio:", usuario.website);

console.log("Compañía:");

console.log(usuario.company);

}
else {

console.log("Usuario no encontrado");

}

}


// 5 COMPAÑÍAS
listarCompanias() {

this.usuarios.forEach(
u => {

console.log(
`${u.company.name}
-
${u.company.catchPhrase}`
);

}
);

}


// 6 ORDENAR
ordenarNombres() {

let ordenados =
[...this.usuarios]

.sort(
(a,b)=>
a.name.localeCompare(
b.name
)
);

ordenados.forEach(
u =>
console.log(u.name)
);

}

}



const gestor =
new GestorUsuarios();



// EVENTOS

document
.getElementById("btn1")
.addEventListener(
"click",
() =>
gestor.listarNombres()
);

document
.getElementById("btn2")
.addEventListener(
"click",
() =>
gestor.buscarInfoBasica()
);

document
.getElementById("btn3")
.addEventListener(
"click",
() =>
gestor.buscarDireccion()
);

document
.getElementById("btn4")
.addEventListener(
"click",
() =>
gestor.buscarInfoAvanzada()
);

document
.getElementById("btn5")
.addEventListener(
"click",
() =>
gestor.listarCompanias()
);

document
.getElementById("btn6")
.addEventListener(
"click",
() =>
gestor.ordenarNombres()
);