//Print odd numbers in an array
(function (numbers) {
    const result = []
    for (const i of numbers) {
        if (i % 2 != 0) {
            result.push(i);
        }
    }
    return result;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Convert all the strings to title caps in a string array
(function (stringArray) {
    const result = []
    for (const i of stringArray) {
        result.push(i.charAt(0).toUpperCase() + i.slice(1));
    }
    return result;
})(["hello", "sam", "pramodh", "sudhan"]);

//Sum of all numbers in an array
(function (numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
})([1, 2, 3, 4, 5]);

//Return all the prime numbers in an array
(function (numbers) {

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
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Return all the palindromes in an array
(function (words) {
    const result = [];
    for (let i of words) {
        let reversedWord = i.split('').reverse().join('');
        if (reversedWord === i)
            result.push(i);
    }
    return result;
})(["level", "hello", "madam", "world", "radar"]);

//Remove duplicates from an array
(function (numbers4) {
    const result = [];

    for (let i = 0; i < numbers4.length; i++) {
        let flag = false;
        for (let j = i + 1; j < numbers4.length; j++) {
            if (numbers4[i] == numbers4[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            result.push(numbers4[i]);
        }
    }
    return result;
})([1, 2, 3, 2, 4, 5, 1, 6, 6, 7]);

//Rotate an array by k times
(function (numbers5, k) {
    const rotatedArray = [];
    const length = numbers5.length;
    for (let i = 0; i < length; i++) {
        const newIndex = (i + k) % length;
        rotatedArray[newIndex] = numbers5[i];
    }
    return rotatedArray;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);

//Return median of two sorted arrays of the same size.
(function (nums1, nums2) {
    let median;
    const result = [];

    for (let i of nums1) {
        result.push(i);
    }

    for (let i of nums2) {
        result.push(i);
    }
    result.sort();
    median = (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
    return median;
})([1, 3, 5], [2, 4, 6]);