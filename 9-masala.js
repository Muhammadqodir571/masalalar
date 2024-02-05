// n soni berilgan. Berilgan son palindrome  ekanligini aniqlang.
//  Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak.
//   Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .
function palindrome(a){
    let num = a.toString()
    let len = num.length
    let res = Math.ceil(len/2)
    for (let i = 0; i <res ; i++) {
        if(num.toString(i) !==num.toString(len-1-i)){
            return false;

        }else{
            return true
        }

    }
}

console.log(palindrome(12321));