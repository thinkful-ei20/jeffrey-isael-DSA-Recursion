function stringSplitter(string, seperator, arr=[]){

    if(string.indexOf(seperator) === -1) {
        arr.push(string);
        if(arr[arr.length-1] === '') arr.pop();
        return arr;
    }

    let seperatorIndex = string.indexOf(seperator);

    let test = string.slice(0, seperatorIndex);

    arr.push(test);

    return stringSplitter(string.slice(seperatorIndex + 1), seperator, arr);
}

console.log(stringSplitter('te.s.t.', '.'));
