// --- Directions
// Given an integer,return a new integer that is the reverse
// ordering of characters
// --- Examples
// reverse('15) === 51

function reverse(int) {
    return int.split("").reverse().join("");
}

console.log(reverse("92"));