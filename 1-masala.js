//   a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali 
//son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

function threeNumber(a,b,c){
    //this check  Number equal 0
    if(a===0||b===0 || c===0){
        console.log("0")
    }else{
       // resault three - digit number
        let threeNum = (a * 100 + b * 10 + c)
        console.log(threeNum);
    }
}

threeNumber(2,3,4)