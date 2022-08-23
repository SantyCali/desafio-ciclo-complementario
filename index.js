let nombre = prompt("Ingrese su nombre para el sorteo");
let numero = prompt("Numeros disponibles: 23, 77, 45, 06, 84, 99.");

while(numero != "ESC"){
    switch (numero) {
        case "23":
            alert(`Numero 23 ingresado, Nombre: ${nombre}`);
            break;
    
         case "77":
                alert(`Numero 77 ingresado, Nombre: ${nombre}`);
                break;

            case "45":
                alert(`Numero 45 ingresado, Nombre: ${nombre}`);
                break;

            case "06":
               alert(`Numero 06 ingresado, Nombre: ${nombre}`);
               break;

            case "84":
                alert(`Numero 84 ingresado, Nombre: ${nombre}`);
                break;

                case "99":
                alert(`Numero 99 ingresado, Nombre: ${nombre}`);
                break;

                

        default:
            alert("Numero no disponible");
            break;
    }

    nombre = prompt("Ingrese su nombre para el sorteo");
    numero = prompt("Numeros disponibles: 23, 77, 89, 84, 99.");
}