function countVowels(str) {
    let count = 0;
    const vowels = 'a,e,i,o,u';
    for (let value of str) {
        if (vowels.includes(value)) {
            count++;
        }
    }
    return count;
}

let str = "Bangladesh";
console.log(countVowels(str)); 

