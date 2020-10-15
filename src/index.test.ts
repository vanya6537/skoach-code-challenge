import { justify } from "./index";
// Input Sets
const inputSet: Array<{
  words: string[];
  maxWidth: number;
  answer: string[];
}> = [
  {
    words: ["This", "is", "an", "example", "of", "text", "justification."],
    maxWidth: 16,
    answer: ["This    is    an", "example of  text", "  justification."],
  },
  {
    words: ["What", "must", "be", "acknowledgment", "shall", "be"],
    maxWidth: 16,
    answer: ["What   must   be", "  acknowledgment", "        shall be"],
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
    ],
  },
];

inputSet.forEach(({ words, maxWidth, answer }, index) => {
  test(`Input Set ${index + 1}`, () => {
    expect(justify(words, maxWidth)).toStrictEqual(answer);
  });
});
