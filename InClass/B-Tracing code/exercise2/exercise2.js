const removeVowels = (word) => {
  const characters = word.split("");

  const result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" 
    ) {
      result.push(character);
    } else {
      //result.push("_");
      result.push(character);
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

