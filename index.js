// Code your solutions in this file
// Task 1: Function to generate thank-you messages using a for loop
function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages;
  }
  
  // Task 2: Function to count down to zero using a while loop
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }

  