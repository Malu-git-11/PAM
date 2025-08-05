function calcular(operacao) {
    const v1 = parseFloat(document.getElementById("v1").value);
    const v2 = parseFloat(document.getElementById("v2").value);
    let resultado = 0;

    if (isNaN(v1) || isNaN(v2)) {
        document.getElementById("resultado").innerText = "Resultado: Digite dois números.";
        return;
        
    }
     switch (operacao) {
        case 'soma':
            resultado = v1 + v2;
            break;
        case 'subtraçao':
            resultado = v1 - v2;
            break;
        case 'multiplicaçao':
            resultado = v1 * v2;
            break;
        case 'divisao':
            if (v2 === 0) {
                document.getElementById("resultado").innerText = "Resultado: Divisão por zero.";
                return;
            }
            resultado = v1 / v2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
