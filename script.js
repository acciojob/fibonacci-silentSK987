function fibonacci(num) {
    // your code here
    if (num <= 0) {
        return "Please enter a positive integer for the Fibonacci sequence.";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else{  let prev = 0;
    let current = 1;

    for (let i = 3; i <= num; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

      return current;
    }
}
module.exports = fibonacci;
