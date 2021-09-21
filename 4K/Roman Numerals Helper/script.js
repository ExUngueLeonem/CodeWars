
class RomanNumerals {
    constructor(num) {
        this.num = num;
    }

    toRoman() {
    
        let romanNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    
        let str = String(this.num);
        let pos = str.length;
        let result = '';
        
        for (let key of str) { //итерируем каждый разряд
    
            let romL = romanNum.length + 1 - pos * 2  ; // -4 // -6 
            if (key < 4) {
                for ( let i = 0; i < key; i++) {
                    result += `${romanNum[romL]}`; //I
                }
            }
    
            if (key >= 6 && key < 9) {
                result += `${romanNum[romL-1]}`;
    
                for ( let i = 5; i < key; i++) {
                    result += `${romanNum[romL]}`; //I
                }
            }    
    
            switch (key) {
                case '4':
                    result += `${romanNum[romL]}${romanNum[romL-1]}` // 'IV';
                    break;
                case '5':
                    result += `${romanNum[romL-1]}`;
                    break;
                case '9':
                    result += `${romanNum[romL]}${romanNum[romL-2]}`;
                    break;                                   
                default:
                    break;
            }
            pos--
            //console.log(result);
        }
        
        return result
    }
    
    fromRoman(num) {

    }
}

let numeral = new RomanNumerals(1456)
console.log(numeral.toRoman()); ; // should return 'M'

RomanNumerals.toRoman(1000);
//RomanNumerals.fromRoman('M'); // should return 1000

/* let foo = 3999;
console.log(String(foo)[0]);


let arabicNum = [1000, 500, 100, 50, 10, 5, 1, ];


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


 */
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