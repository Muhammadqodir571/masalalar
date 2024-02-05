// Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi 
//  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.
function everyBig(array) {
    let max = array[0];
    let secondMax = Number.MIN_SAFE_INTEGER; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            secondMax = max;
            max = array[i]
        } else if (array[i] > secondMax && array[i] !== max) {
            secondMax = array[i];
        }
    }

    return secondMax;
}


const array = [4, 6, 8, 2, 10, 12];
const arrayTo =  everyBig(array)
console.log("Eng katta ikkinchi element: ",arrayTo);