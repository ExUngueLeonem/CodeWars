
class RomanNumerals {
    constructor(num) {
        this.num = num;
    }

    toRoman(num) {

    }

    fromRoman(num) {

    }
}

//RomanNumerals.toRoman(1000); // should return 'M'
//RomanNumerals.fromRoman('M'); // should return 1000


function toRoman(num) {
    let result = '';

    let i = 1;
    let v = 5;
    let x = 10;
    let l = 50;
    let c = 100;
    let d = 500;
    let m = 1000;
    let numeric = [1000, 500, 100, 50, 10, 5, 1]

    //987
    num / 500 = n
    num - 500 * n > 400
    +CM
    //if (num / 500 < 1) continue//двигаемся дальше
    


    
    return result
}

console.log(toRoman(3999)); 
console.log(toRoman(2999)); 
console.log(toRoman(1999)); 


//3999   MMMCMXCIX

let romeNum = [1000, 1000, 1000, 100, 1000, 10, 100, 1, 10];
let arr = [];
let result
romeNum.forEach((elem, i) => {
    
    if(romeNum[i] < romeNum[i + 1]) {
        arr.push()
    } else if (){

    } else {
        arr.push(elem);
    }
})



/*

I 	1
IV 	4
V 	5
X 	10
L 	50
C 	100
D 	500
M 	1000


Создайте класс RomanNumerals, который может преобразовывать римские числа 
в целочисленные значения и обратно. 
Он должен соответствовать API, продемонстрированному в примерах ниже. 
Для каждого вспомогательного метода будет проверено несколько значений 
римских цифр.

Современные римские цифры записываются, выражая каждую цифру отдельно, 
начиная с самой левой цифры и пропуская любую цифру с нулевым значением. 
Римскими цифрами отображается 1990 год: 1000 = M, 900 = CM, 90 = XC; 
в результате получается MCMXC. 
2008 записывается как 2000 = MM, 8 = VIII; или MMVIII. 
1666 использует каждый римский символ в порядке убывания: MDCLXVI.

Диапазон ввода: 1 <= n <4000

В этом ката 4 должны быть представлены как IV, 
а НЕ как IIII («часовая четверка»).
*/