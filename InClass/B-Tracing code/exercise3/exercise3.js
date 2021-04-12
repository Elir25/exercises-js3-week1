const getRepos = (repoName) => {
  //return fetch('https://api.github.com/users/' + repoName + '/repos')  
  fetch(`https://api.github.com/users/${repoName}/repos`)
    /*.then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
		console.log(rep.name);
        return rep.name;
      });
    });*/
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

//codigo original
/*const myElement = document.querySelector("#main");
const paragraph = document.createElement("p"); 
paragraph.innerText = migracodeRepos;
myElement.appendChild(paragraph);*/

//Task1. Fix the code
//Task2. Create a <p> for each repository
