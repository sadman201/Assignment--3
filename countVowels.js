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

console.log(countVowels("sadman")); // Output: 2

