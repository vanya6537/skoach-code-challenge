"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.justify = void 0;
/**
 * @return  string[]
 * @param words
 * @param maxWidth
 */
function justify(words, maxWidth) {
    // We store words and width without spaces for every row
    var rows = [];
    // Length of characters in row WITHOUT spaces
    var widthCounter = 0;
    var tempRow = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (widthCounter + word.length + tempRow.length <= maxWidth) {
            // While have enough empty space in current row - add new word and count width!
            tempRow = __spreadArrays(tempRow, [word]);
            widthCounter += word.length;
        }
        else {
            // Add current row to rows
            rows = __spreadArrays(rows, [{ words: tempRow, width: widthCounter }]);
            // After this in current row will be only one word
            tempRow = [word];
            // and length of row equals to length of this word
            widthCounter = word.length;
        }
    }
    // If our last "current" row is not empty - add it to rows
    if (tempRow)
        rows = __spreadArrays(rows, [{ words: tempRow, width: widthCounter }]);
    // Return stretched rows
    return rows.map(function (_a, index) {
        var words = _a.words, width = _a.width;
        // If this is last row - it will be right-justified
        var stretchType = index === rows.length - 1 ? "right" : "normal";
        return stretchRow(words, width, maxWidth, stretchType);
    });
}
exports.justify = justify;
function stretchRow(words, currentWordsWidth, maxWidth, stretchType) {
    if (stretchType === "normal" && words.length > 1) {
        return words.reduce(function (previousWord, currentWord, wordIndex) {
            // Optimal space is the average value
            var averageSpaceLength = Math.floor((maxWidth - currentWordsWidth) / (words.length - wordIndex));
            // Delete previousWord from the row to be able to count next optimal space length
            currentWordsWidth -= previousWord.length;
            maxWidth -= previousWord.length + averageSpaceLength;
            return previousWord + " ".repeat(averageSpaceLength) + currentWord;
        });
    }
    else {
        // Empty space is a space before the first word
        var emptySpaceLength = maxWidth - currentWordsWidth - words.length + 1;
        var emptySpace = emptySpaceLength ? " ".repeat(emptySpaceLength) : "";
        return (emptySpace +
            words.reduce(function (previousWord, currentWord) {
                return previousWord + " " + currentWord;
            }));
    }
}
