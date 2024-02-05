//Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring, 
// Agar kegan son ikkiga teng bo'lsa  'Seshanba' 
//ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.



function numberDay(Num){
    let weekDay = ''
    switch (Num) {
        case 1: 
            weekDay = 'Dushanba'
                break
        case 2: 
            weekDay = 'Seyshanba'
                break

        case 3: 
            weekDay = 'CHorshanba'
                break
        case 4: 
            weekDay = 'Payshanba'
                break
        case 5: 
            weekDay = 'Juma'
                 break
        case 6: 
            weekDay = 'Shanba'
                break 
        case 7: 
            weekDay = 'Yakshanba'
                break                
        default:
            console.log("none");
            break;
    }
    console.log(weekDay);
}

numberDay(1)