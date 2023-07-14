//Print odd numbers in an array
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const printOddNumbers = (numbers) => {
    const result = []
    for (const i of numbers) {
        if (i % 2 != 0) {
            result.push(i);
        }
    }
    return result;
}

printOddNumbers(numbers1);

//Convert all the strings to title caps in a string array
const strings1 = ["hello", "sam", "pramodh", "sudhan"];

const titleCapsArray = (stringArray) => {
    const result = []
    for (const i of stringArray) {
        result.push(i.charAt(0).toUpperCase() + i.slice(1));
    }
    return result;
}

titleCapsArray(strings1);

//Sum of all numbers in an array
const numbers2 = [1, 2, 3, 4, 5];

const sumofNumbers = (numbers) => {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

sumofNumbers(numbers2);


//Return all the prime numbers in an array
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (numbers) => {

    const result = [];
    for (let i of numbers) {
        let isPrime = true;
        if (i <= 1)
            isPrime = false;
        if (i === 2) {
            result.push(i)

        }
        else {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                result.push(i);
            }
        }

    }
    return result;
}

primeNumbers(numbers3);

//Return all the palindromes in an array
const words = ["level", "hello", "madam", "world", "radar"];

const palindromes = (words) => {
    const result = [];
    for (let i of words) {
        let reversedWord = i.split('').reverse().join('');
        if (reversedWord === i)
            result.push(i);
    }
    return result;
}

palindromes(words);
