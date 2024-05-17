// Inicio
// NUMERO ENTERO 1 input
// NUMERO ENTERO 2 input
// CONVERTIR MIS DOS INPUT EN EL INICIO Y EL FINAL DE UN ARRAY DE NÚMEROS ENTEROS
// DECLARAR UNA VARIABLE TOTAL CON VALOR 0
// HACER UN BUCLE, DONDE MI NUMERO 1 SERA EL INICIO Y EL NUMERO 2 SERA EL FINAL DE MI BUCLE
// POR CADA VALOR DE RESULTADO, SUMARSE A LA VARIABLE TOTAL
// RETORNAR LA VARIABLE TOTAL EL VALOR FINAL
// FIN

const sumAll = function(num1, num2) {
    if((num1 < 0 || num2 < 0)|| ((typeof num1 !== 'number') || (typeof num2 !== 'number'))) {
        return 'ERROR';
    } else {
        const array = convertToArray(num1, num2);
        let result = array.reduce((acc, current) => acc + current, 0)
        return result;
}
};

const convertToArray = (num1, num2) => {
    const TO_CONVERT_ARRAY = [];
    if(num1 > num2){
        for(let i = num2; i <= num1; i++) {
                TO_CONVERT_ARRAY.push(i)
        }
        return TO_CONVERT_ARRAY.sort();
    } else {
        if(!((typeof num1 === 'number') && (typeof num2 === 'number'))) {
            return 'ERROR';
        } else {
            for(let i = num1; i <= num2; i++) {
                TO_CONVERT_ARRAY.push(i)
            }
            return TO_CONVERT_ARRAY.sort();
        }
    }
}


// Do not edit below this line
module.exports = sumAll;
