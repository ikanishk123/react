function Alphabet() {
    const letters = input.toLowerCase().split('');
    const frequency = {};

    letters.forEach(function(char) {
        if (char >= 'a' && char <= 'z') {
            if (frequency[char]) {
                frequency[char]++;
            }
            else {
                frequency[char] = 1;
            }
        }
    })

    let maxCount= 0;
    let mostFrequent= '';

    for(let char in frequency) {
        if (frequency[char]> maxCount) {
            maxCount= frequency[char];
            mostFrequent= char;
        }
        
    }
}

console.log('yesss');
