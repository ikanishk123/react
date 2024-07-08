function count(input, callback) {
    const frequency = {};
    input.toLowerCase().split('').forEach(char => {
        if (char >= 'a' && char <= 'z') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    });
    callback(null, frequency);
}

function findMostRepeated(frequency, callback) {
    let maxCount = 0;
    let mostFrequent = '';
    Object.entries(frequency).forEach(([char, count]) => {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = char;
        }
    });
    callback(null, { char: mostFrequent, count: maxCount });
}

const input = "Kanishk Lamba";

count(input, (err, frequency) => {
    if (err) {
        console.error('', err);
    } else {
        findMostRepeated(frequency, (err, result) => {
            if (err) {
                console.error('', err);
            } else {
                console.log(`${result.char}`);
            }
        });
    }
});

