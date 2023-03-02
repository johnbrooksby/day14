// function printDigits (num) {
//     num = Math.abs(num);
//     let numb = 0;
//     while (num > 0) {
//         numb = Math.round((((num / 10) - (Math.floor(num / 10))) * 10));
//         console.log(numb);
//         num = Math.floor(num / 10);
//     }
// }

function printDigits (num) {
    num = Math.abs(num);
    while (num > 0) {
        let number = num % 10;
        console.log(number);
        num = Math.floor(num / 10);
    }
}

printDigits(31409);