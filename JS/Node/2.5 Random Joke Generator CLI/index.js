import oneLinerJoke from 'one-liner-joke';
import inquirer from 'inquirer';

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "What type of joke do you wanna hear? (stupid/rude/blonde/intelligence)",
        name: "userTags"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const userAns=answers.userTags;
    var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag(userAns);
    console.log(getRandomJokeWithTag.body)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("ERROR!")
    } else {
      // Something else went wrong
    }
  });