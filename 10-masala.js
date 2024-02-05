// n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.
function num(n){
    let sum =0
    let nan = n.toString()
    let vas = nan.length

    for (let i = 0; i <= vas; i++) {
        sum +=i;
        
    }
    return sum
}


console.log(num(123456));
