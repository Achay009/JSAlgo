/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const res = [];
    // sort words, so we have them already in lexical order (don't modify input by making copy)
    let matched = [...products].sort();

    for (let i=0; i<searchWord.length; i++) {
        // we only consider the words that were previously matched
        matched = matched.filter(word => word[i] === searchWord[i]);
        // select top 3
        res.push(matched.slice(0,3));
    }
    return res;
};