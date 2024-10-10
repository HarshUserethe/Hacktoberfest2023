 // Function to check if a number is prime
    function isPrime(num) {
      // Edge cases: numbers less than 2 are not prime
      if (num < 2) return false;

      // Check divisibility from 2 to the square root of the number
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false; // If divisible by any number, it's not prime
        }
      }
      return true; // If no divisors found, it's prime
    }

    // Function to handle button click and display result
    function checkPrime() {
      const number = parseInt(document.getElementById('numberInput').value);
      const result = document.getElementById('result');

      // Check if the input is a valid number
      if (isNaN(number)) {
        result.innerText = 'Please enter a valid number!';
        return;
      }

      // Check if the number is prime
      if (isPrime(number)) {
        result.innerText = `${number} is a prime number.`;
      } else {
        result.innerText = `${number} is not a prime number.`;
      }
    }
