var cuentas = [
    { nombre: "tomi", saldo: 200, password: "pass" },
    { nombre: "nuria", saldo: 290, password: "passnuria" },
    { nombre: "maria", saldo: 67, password: "passmaria" }
];

var cuentaSeleccionada = prompt("Ingresa el nombre de la cuenta");

var password = prompt("Ingresa el password de la cuenta");

var cuenta = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada);

if (cuenta) {
    if (cuenta.password === password) {
        var opcion = prompt("Selecciona una opción: \n1. Consultar saldo \n2. Ingresar monto \n3. Retirar monto");

        if (opcion === "1") {
            alert("Saldo actual: $" + cuenta.saldo);
        } else if (opcion === "2") {
            var montoIngresado = prompt("Ingresa el monto a ingresar:");

            montoIngresado = +montoIngresado;

            if (montoIngresado > 0) {
                cuenta.saldo += montoIngresado;
                alert("Se ingresaron $" + montoIngresado + ". Nuevo saldo: $" + cuenta.saldo);
            } else {
                alert("Monto inválido. Inténtalo nuevamente.");
            }
        } else if (opcion === "3") {
            var montoRetirado = prompt("Ingresa el monto a retirar:");

            montoRetirado = +montoRetirado;

            if (montoRetirado > 0 && montoRetirado <= cuenta.saldo && cuenta.saldo - montoRetirado >= 10 && cuenta.saldo - montoRetirado <= 990) {
                cuenta.saldo -= montoRetirado;
                alert("Se retiraron $" + montoRetirado + ". Nuevo saldo: $" + cuenta.saldo);
            } else {
                alert("Monto inválido o saldo insuficiente. Inténtalo nuevamente.");
            }
        } else {
            alert("Opción no válida");
        }
    } else {
        alert("Password incorrecto");
    }
} else {
    alert("Cuenta no encontrada");
}
