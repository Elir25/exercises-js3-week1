const myElement = document.querySelector("#main");
const getRepos = (repoName) => {
    
  fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(response => response.json())
    .then((data) => {
      return data.map((rep) => {
		console.log(rep.name);
        return rep.name;
      }).forEach((rep) => {
        const myElement = document.querySelector("#main");
        const newText = document.createElement("p");
        newText.innerText = rep;
        myElement.appendChild(newText);
      });
    });
};


const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");

//Task1. Fix the code
//Task2. Create a <p> for each repository
