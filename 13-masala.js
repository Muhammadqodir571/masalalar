// a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini
//   yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.
function arrayEqueal(array,a){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j]=== a){
                console.log(`bu ${array[i]} va ${array[j]}`);
            }
            
        }     
    }
}

const a = 4
const array = [1,2,3,4,5]
arrayEqueal(array,a)
