var espacio = " "
function Ver_hora() {
    var mihora = new Date();
    var anio = mihora.getFullYear().toString();
    var numero = mihora.getDate().toString();
    var dia = mihora.getDay();
    switch (dia) {
        case 1:
            dia = "Lunes";
            break;

        case 2:
            dia = "Martes";
            break;

        case 3:
            dia = "Miercoles";
            break;

        case 4:
            dia = "Jueves";
            break;

        case 5:
            dia = "Viernes";
            break;

        case 6:
            dia = "Sabado";
            break;

        default:
            dia = "Domingo"
    }
    var mes = mihora.getMonth().toString();
    var horas = mihora.getHours().toString();
    var minutos = mihora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    var segundos = mihora.getSeconds().toString();
    if (segundos.length == 1) segundos = "0" + segundos;
    document.forms[0].mireloj.value = numero + "/" + mes + "/" + anio + espacio + dia + espacio + "\n" + horas + ":" + minutos + "." + segundos;
}

var r = setInterval("Ver_hora()", 500);