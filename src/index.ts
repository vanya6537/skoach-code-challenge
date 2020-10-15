/**
 * @return  string[]
 * @param words
 * @param maxWidth
 */
export function justify(words: string[], maxWidth: number): string[] {
  // We store words and width without spaces for every row
  let rows: { words: string[]; width: number }[] = [];
  // Length of characters in row WITHOUT spaces
  let widthCounter = 0;

  let tempRow: string[] = [];

  for (const word of words) {
    if (widthCounter + word.length + tempRow.length <= maxWidth) {
      // While have enough empty space in current row - add new word and count width!
      tempRow = [...tempRow, word];
      widthCounter += word.length;
    } else {
      // Add current row to rows
      rows = [...rows, { words: tempRow, width: widthCounter }];
      // After this in current row will be only one word
      tempRow = [word];
      // and length of row equals to length of this word
      widthCounter = word.length;
    }
  }
  // If our last "current" row is not empty - add it to rows
  if (tempRow) rows = [...rows, { words: tempRow, width: widthCounter }];

  // Return stretched rows
  return rows.map(({ words, width }, index) => {
    // If this is last row - it will be right-justified
    const stretchType = index === rows.length - 1 ? "right" : "normal";
    return stretchRow(words, width, maxWidth, stretchType);
  });
}

function stretchRow(
  words: string[],
  currentWordsWidth: number,
  maxWidth: number,
  stretchType: "normal" | "right"
): string {
  if (stretchType === "normal" && words.length > 1) {
    return words.reduce((previousWord, currentWord, wordIndex) => {
      // Optimal space is the average value
      const averageSpaceLength = Math.floor(
        (maxWidth - currentWordsWidth) / (words.length - wordIndex)
      );
      // Delete previousWord from the row to be able to count next optimal space length
      currentWordsWidth -= previousWord.length;
      maxWidth -= previousWord.length + averageSpaceLength;

      return previousWord + " ".repeat(averageSpaceLength) + currentWord;
    });
  } else {
    // Empty space is a space before the first word
    const emptySpaceLength = maxWidth - currentWordsWidth - words.length + 1;
    const emptySpace = emptySpaceLength ? " ".repeat(emptySpaceLength) : "";
    return (
      emptySpace +
      words.reduce((previousWord, currentWord) => {
        return previousWord + " " + currentWord;
      })
    );
  }
}
