function arrayDiff(arr, arrFilter){
    return arr.filter( (elem) => !arrFilter.includes(elem));
  }
  
  console.log(arrayDiff([1,2,2,2,3],[2])); // == [1,3]
  