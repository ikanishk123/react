function Alphabet(input) {
    const letters = input.toLowerCase().split('');
    const frequency = {};

   for( let i =0; i<=letters.length ; i++){
    const char = letters[i];
    
    if (char>='A' && char <='Z'){
        if(frequency[char]){
            frequency[char]++;
        }
        else {
            frequency[char]=1;
        }
    }
   }

    let maxCount = 0;
    let mostFrequent = '';

    for (let char in frequency) {
        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            mostFrequent = char;
        }

    }
    console.log(mostFrequent)
}
const input = "KanishkKumarLamba";

Alphabet(input);