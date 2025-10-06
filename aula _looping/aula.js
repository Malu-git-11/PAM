let x = 0;
const   evenNumbers = []
while (x <= 10) {
    console.log("Valor: ", x);
    if (x % 2 === 0) {
        evenNumbers.push(x);
    }
    if (x === 10) break;
    x++;

}

console.log("Lista: ", evenNumber);