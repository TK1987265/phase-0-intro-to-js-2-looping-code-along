// Function that creates thank-you cards for a given array of names and an event
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function that counts down from a given positive integer to zero
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; 
    }
  }
  
  // Example use of writeCards()
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);

  module.exports = {
    writeCards,
    countDown
  };

  
  // Example use of countDown()
  countDown(10);
  