
function ipsBetween(ip1, ip2) {
    let arrIp1 = ip1.split('.');
    let arrIp2 = ip2.split('.');
    let result = [];

    arrIp1.forEach( (elem, i) => {
        result.push( arrIp2[i] - elem);
    }); 
    
    let newArr = result.map( (elem, i) => {
        return result[i] * (256 ** (result.length - 1 - i));
    }).reduce( (a, b) => { return a + b; });

    return newArr;
}



console.log(ipsBetween("10.0.0.0", "10.0.0.50"));  //===   50 
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); //===  256 
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); //===  246

