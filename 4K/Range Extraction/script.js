function rangeExtraction(arr) {
    let res = [];
    let tmp = [];
    //for (let i = 0; i < arr.length; i++) {
        arr.forEach( (arr, i) => {
            if (arr[i + 1]){
                tmp.push(arr[i] - arr[i + 1]);
            }
        });
        //if (arr[i + 1]) {
/* 
            //console.log(arr[i])
            if (Math.abs((arr[i] - arr[i + 1])) == 1){
                tmp.push(arr[i])
            }

            if (Math.abs((arr[i] - arr[i + 1])) > 1){
                res.push(arr[i]);
            }    
 */
            
        //} 
    
    console.log('tmp', tmp)
    console.log('tmp.length', tmp.length, 'arr.length', arr.length)
    return res;
}

const res = rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
console.log(res)

/* 
если для каждого элемента arr[i]-arr[i+1]
и записать результаты в массив
*/