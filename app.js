let anagrams = [];

let genAnagrams = (word, anagram = '', anagrams = []) => {
    word = word.toUpperCase();
    if (anagram) {
        anagrams.push(anagram);
    }
    if (!word) {
        return;
    }
    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length - 1);
    }
    return [...new Set(anagrams)];
};

console.log(genAnagrams('AaBC'));