# Skoach Code Challenge - TypeScript Submission
### Eslint + Jest + TypeScript
## Available Tests

### `yarn test`

## Challenge: Text Justification, Default Right

Given an array/list of `words` and a width `max_width`, format the text such that each line has exactly `max_width` characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `max_width` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the right will be assigned more spaces than the slots on the left.

For the last line of text, it should be right justified and no extra space is inserted between words.

    Note:

    * A word is defined as a character sequence consisting of non-space characters only.
    * Each word's length is guaranteed to be greater than 0 and not exceed max_width.
    * The input array words contains at least one word.

### Example 1:

```elixir
# Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
max_width = 16

# Output:
[
   "This    is    an",
   "example of  text",
   "  justification."
]
```

### Example 2:

```elixir
# Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16

# Output:
[
  "What   must   be",
  "  acknowledgment",
  "        shall be"
]
```

Explanation: Note that the last line is "&nbsp;&nbsp;&nbsp;&nbsp;shall be" instead of "shall&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;be",
             because the last line must be right-justified instead of fully-justified.
             Note that the second line is also right-justified becase it contains only one word.

### Example 3:

```elixir
# Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20

# Output:
[
  "Science is  what  we",
  "understand      well",
  "enough to explain to",
  "a computer.  Art  is",
  "everything  else  we",
  "                  do"
]
```

### Expected Signature

#### Elixir
```elixir
@spec justify([String.t()], non_neg_integer()) :: [String.t()]
def justify(words, max_width) do
  # ...
end
```

#### JavaScript
```javascript
/**
 * @param   String[]  words
 * @param   Number    maxWidth
 * @return  String[]
 */
function justify(words, maxWidth) {
  // ...
}
```