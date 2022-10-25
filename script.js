/* js productos*/

let producto1 = { 
  nombre:"bacha artesanal",
  precio: 4850,
  stock: 5,
  imagen: "../media/BachaArtesanal.jpeg"
}
 
let producto2 = {
  nombre: "jarrita acqua",
  precio: 1200,
  stock: 20,
  imagen:"../media/Jarrita Acqua.jpeg"
}
 
let producto3 = {
  nombre:"jarrón rubí",
  precio: 3300,
  stock: 25,
  imagen:"../media/JarrónRubí.jpeg"
}
 
let producto4 = {
  nombre:"cuenco acqua",
  precio: 1300,
  stock: 30,
  imagen:"../media/CuencoAcqua.jpeg"
}

let producto5 = { 
  nombre:"taza rústica rubí",
  precio: 1500,
  stock: 50,
  imagen:"../media/TazarústicaRubi.jpeg"
}
    
let producto6 = {
  nombre:"hornito rubí",
  precio: 1900,
  stock: 30,
  imagen:"../media/HornitoRubí.jpeg"
}

let producto7 = {
  nombre:"ensaladera mar",
  precio: 2800,
  stock: 20,
  imagen:"../media/EnsaladeraMar.jpeg"
}
 
let producto8 = {
  nombre:"mate acqua",
  precio: 1400,
  stock: 70,
  imagen:"../media/MateAcqua.jpeg"
}

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0


let productos = document.getElementById("productos")

for (const prod of listaProductosConStock){
  
  let card = document.createElement("div")

  card.className ="card"

  card.innerHTML = `<img src="${prod.imagen}" height="200" width="400"></imagen><h1>${prod.nombre}</h1><p>Precio: $${prod.precio}</p><button id="boton"${prod.listaProductos}>Comprar</button>`

  productos.append(card)
}

let boton = document.getElementById("boton")

boton.addEventListener("click", mostrarPorConsola)

function mostrarPorConsola(){
  console.log("Hiciste click")
}