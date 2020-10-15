"use strict";
exports.__esModule = true;
var index_1 = require("./index");
// Input Sets
var inputSet = [
    {
        words: ["This", "is", "an", "example", "of", "text", "justification."],
        maxWidth: 16,
        answer: ["This    is    an", "example of  text", "  justification."]
    },
    {
        words: ["What", "must", "be", "acknowledgment", "shall", "be"],
        maxWidth: 16,
        answer: ["What   must   be", "  acknowledgment", "        shall be"]
    },
    {
        words: [
            "Science",
            "is",
            "what",
            "we",
            "understand",
            "well",
            "enough",
            "to",
            "explain",
            "to",
            "a",
            "computer.",
            "Art",
            "is",
            "everything",
            "else",
            "we",
            "do",
        ],
        maxWidth: 20,
        answer: [
            "Science is  what  we",
            "understand      well",
            "enough to explain to",
            "a computer.  Art  is",
            "everything  else  we",
            "                  do",
        ]
    },
];
inputSet.forEach(function (_a, index) {
    var words = _a.words, maxWidth = _a.maxWidth, answer = _a.answer;
    test("Input Set " + (index + 1), function () {
        expect(index_1.justify(words, maxWidth)).toStrictEqual(answer);
    });
});
