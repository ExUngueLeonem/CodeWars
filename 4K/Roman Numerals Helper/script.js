
class RomanNumerals {

    static toRoman(num) {

        let romanNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    
        let str = String(num);
        let pos = str.length;
        let result = '';
        
        for (let key of str) { //итерируем каждый разряд
    
            let romL = romanNum.length + 1 - pos * 2  ; 
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
                    result += `${romanNum[romL]}${romanNum[romL-1]}`; // 'IV';
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
            pos--;
        }
        
        return result;
    }
    
    static fromRoman(num) {
        let numeric = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let arr = num.split('');
        let numArr = [];
        
        arr.forEach( elem => numArr.push(numeric[elem]) );

        numArr.map( (elem, i) => {
            if (numArr[i + 1]) {
                if (numArr[i] < numArr[i + 1]){
                    numArr[i + 1] = numArr[i + 1] - numArr[i];
                    numArr[i] = 0;
                }
            }
        });

        return numArr.reduce( (a, b) => a + b );

    }
}

console.log(RomanNumerals.toRoman(1946)); 
console.log(RomanNumerals.fromRoman('MCMXLVI')); // should return 1946