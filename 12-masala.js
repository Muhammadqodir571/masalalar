// n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. 
// Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.
function enterNumArray(array,n){
    let count = 0 
    for (let i = 0; i < array.length; i++) {
        if( array[i] === n){
            count++
        }
       
    }
    return count
}

const array = [1,4,3,4,5]
const n= 4
const sun = enterNumArray(array,n)

console.log(`buerda ${sun} ta ${n} bor`);