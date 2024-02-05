// array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

function arrayToGet(a){
    const reverse = []
    for(let i = 0 ; i < a.length; i++){
        reverse.push(a[i])
    }
    return reverse


}
const a = ['mars','arbita','neytron']
 arrayToGet(a)

console.log(arrayToGet(a).reverse())