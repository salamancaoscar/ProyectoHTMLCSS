/*10.	Función para verificar si un número es primo
Crea una función llamada esPrimo que reciba un número y devuelva true si el número es primo, o false en caso contrario.*/
function esPrimo(num) {
    if (num <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible por cualquier número que no sea 1 o el mismo, no es primo
        }
    }
    
    return true; // Si no encontró ningún divisor, es primo
}

let numero = 8;
if (esPrimo(numero)) {
    console.log(`${numero} es un número primo`);
} else {
    console.log(`${numero} no es un número primo`);
}
