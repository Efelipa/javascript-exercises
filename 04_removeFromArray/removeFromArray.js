// INICIO
// Obtenemos el array 
// Obtenemos el item 
// Si existe el item dentro del array se borra
// Devolvemos el array sin el item dentro
// Si en caso no existiera devolvemos el array sin modificar
// FIN

const removeFromArray = function(arr, ...items) {
    let resultArray = [...arr]
    let setArray = new Set(resultArray)
    let arrayFlatted = [...setArray]
    let sortedItems = items.sort()
    
    for(let i = 0; i < sortedItems.length; i++) {
        if(arrayFlatted.includes(sortedItems[i])) {
            let itemPosition = arrayFlatted.indexOf(sortedItems[i]);
            arrayFlatted.splice(itemPosition, 1)
        } else if (arrayFlatted.includes(sortedItems[i]) && (typeof sortedItems[i]) === "string"){
            return arrayFlatted;
        }
    }
    return arrayFlatted
};


// Do not edit below this line
module.exports = removeFromArray;
