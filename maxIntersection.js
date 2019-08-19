//  NumberOfDiscIntersections 100%
var A = [1, 5, 2, 1, 4, 0]; // should return 11

function solution(A) {
    var i,
        sum = 0,
        len = A.length,
        startArr = [],
        endArr = [],
        active = 0;

    // fill arrays with zeros
    for (i = 0; i < len; i += 1) {
        startArr[i] = 0;
        endArr[i] = 0;
    }

    // sort start and end boundaries of the discs into their own arrays
    for (i = 0; i < len; i += 1) {

        if (i < A[i])
            startArr[0]++;
        else
            startArr[i - A[i]]++;

        if (i + A[i] >= len)
            endArr[len - 1]++;
        else
            endArr[i + A[i]]++;
    }

    // <--- here is where I lose it, this for loop, I just simply do not understand why this works or how anyone could of gotten this
    for (i = 0; i < len; i += 1) {

        sum += active * startArr[i] + (startArr[i] * (startArr[i] - 1)) / 2;

        // over 10 000 000 return -1 as stated in the assignment
        if (10000000 < sum)
            return -1;

        active += startArr[i] - endArr[i];
    }
    // return the answer
    return sum;
}

console.log(solution(A));
