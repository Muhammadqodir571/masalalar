// Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin. 
//  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi.
//  Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

// masalan 2000, 2004, 2008      2024

function kabisaYear (year){
    const yearNum = year%4
    if(yearNum ===0){
        console.log( true); 

    }else{
        console.log( false);
    }
}


kabisaYear(1984)