let pin = 2131;
let numero = prompt("escribe la contraseña");
console.log(numero);

do {
    numero = prompt("proporcioname la contraseña");
} while (Number(numero) !== pin);
console.log ("la contraseña es correcta");
