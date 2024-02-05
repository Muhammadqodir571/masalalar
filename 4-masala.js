// a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali 
// son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.
function digetelNum(diget){
    if(diget<10){
        return 1;
    }else if(diget<100){
        return 2;
    }else if(diget<1000){
        return 3
    }else{
        console.log('xato');
    }
}


console.log(digetelNum(9));


