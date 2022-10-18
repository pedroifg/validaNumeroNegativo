function validarNumero() {
    var a = document.getElementById("texto").value;

    if (a >= 0) {
       document.getElementById("resposta").innerHTML="Inválido";
    } else {
        document.getElementById("resposta").innerHTML="Válido";
    }
}