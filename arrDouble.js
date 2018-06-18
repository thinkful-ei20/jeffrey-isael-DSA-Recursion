function arrDouble(arr){
    if(!arr.length) return [];

    return [arr[0] * 2, ...arrDouble(arr.slice(1))];
}

console.log(arrDouble([1,2,3, 5]));