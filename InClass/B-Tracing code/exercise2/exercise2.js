const removeVowels = (word) => {
  const characters = word.split("");

  const result = [];

  characters.forEach(function(character) {
    if (
      character === "s" ||//my
      character === "a" ||
      character === "m" ||//my
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" ||
      character === "l" //my
    ) {
      result.push(character);
    } else {
      result.push("_");
      //result.splice(0, 1, "s");
      //result.splice(2, 1, "m");
      //result.splice(5, 1, "l");
    }
  });

  return result.join("");

}

const removeVowelsForWords = (words) => {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
  
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
  let result = removeVowels('samuel');
  let resultRemoveVowels = removeVowelsForWords(["Irina", "Etza", "Daniel"])
 /*my*/console.log(result);
/*my*/console.log(resultRemoveVowels);

/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/

