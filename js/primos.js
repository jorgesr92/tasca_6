function esprimo(numero) {
    for (var z=2; z<numero; z++) {
        if (numero%z==0) {
            return false;
        }
    }
    return true;
}