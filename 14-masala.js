// Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring
// ] (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring
function arrayNum(array){
    const sortArray =[]
    for (let i = 0; i < array.length; i++) {
        sortArray.push(array[i])


        
    }
    return sortArray

}


const array = ['alif','be','te','ce']

console.log(arrayNum(array).sort());