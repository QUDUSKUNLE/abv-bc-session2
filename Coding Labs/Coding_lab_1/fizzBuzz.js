// Solution to fizzBuzz Problem

fizzBuzz = (n) => {
    const fiz = "Fizz";
    const buz = "Buzz";
    const fizBuz = "FizzBuzz";
    if (n % 3 === 0 && n % 5 === 0) {
        return fizBuz;
    } else if (n % 3 === 0) {
        return fiz;
    } else if (n % 5 === 0) {
        return buz;
    } else if (n % 3 !== 0 && n % 5 !== 0) {
        return n;
    }
}