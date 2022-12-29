// Code your solution here

function findMatching(array, string) {
    const result = array.filter((drivers) => drivers.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(array, string) {
    const result = array.filter((drivers) => drivers.startsWith(string));
    return result;
}

function matchName(array, string) {
    const result = array.filter((drivers) => drivers.name === string);
    return result;
}