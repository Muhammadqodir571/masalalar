// a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat  
//  bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

function positiveNum(a,b,c,d){
    if(a > 0 && b > 0 && c > 0 && d > 0){
        return  true
    }else{
        return false
    }
}


console.log(positiveNum(123,23,24,23));