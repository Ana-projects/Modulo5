const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

function mostrarProducto(producto) {
    for (propiedad in producto) {
        console.log(propiedad + ": " + producto[propiedad]);
    }
}

function mostrarCarrito() {
    for (producto of carrito) {
        mostrarProducto(producto);
        console.log("--------------------------------");
    }
}

function eliminarProducto(id) {
    i = 0;
    while (carrito[i] != id && i < carrito.length) {
        if (carrito[i].id === id) {
            carrito.splice(i, 1);
        }
        i++;
    }
}

function totalCompra() {
    var total = 0;
    for (producto of carrito) {
        total += producto.price * producto.count;
    }
    return total;
}

function productosPrime() {
    console.log("Productos premium: ");
    for (producto of carrito) {
        if (producto.premium) {
            console.log(producto.id + ": " + producto.name);
        }
    }
}

function gastosEnvio() {
    var gastos = false;
    i = 0;
    while (!gastos && i < carrito.length) {
        if (!carrito[i].premium) {
            gastos = true;
        }
        i++;
    }

    if (gastos) {
        console.log("Con gastos de envío");
    }
    else {
        console.log("Gastos de envío cero");
    }
}


//PARTE OBLIGATORIA
//listar todos los productos del carrito
mostrarCarrito();

//eliminar el producto cuya id se pasa como parámetro
eliminarProducto(54657);

//calcular total 
var total = totalCompra();
console.log("Total = " + total);

//mostrar sólo los productos prime
productosPrime();



//PARTE OPCIONAL
//No se aplican gastos de envío si todos los productos son premium
gastosEnvio();

//Mostrar productos del carrito en HTML
document.write("<ul>");
for (producto of carrito) {
    document.write("<li>" + producto.name + "</li>");
}
document.write("</ul");

//Aplicar un descuento del 5% si la compra es mayor de 50€
if (total > 50) {
    console.log("Se aplica un descuento del 5%. Precio final = ", total * 0.95);
}






