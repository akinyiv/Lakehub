// --- Directions
// Given a String,return a new string with the reversed
// order of characters
// --- Examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'elppa'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse("hello"));