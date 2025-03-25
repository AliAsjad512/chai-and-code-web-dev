if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(userfn, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            accumulator = userfn(accumulator, this[i], i, this);
        }

        return accumulator;
    };
}


const arr = [1, 2, 3, 4];

// Using myReduce to sum all elements
const n = arr.myReduce((ac, cu) => ac + cu, 0);
console.log(n); // Output: 10

// Using myReduce to multiply all elements
const m = arr.myReduce((ac, cu) => ac * cu, 1);
console.log(m); // Output: 24

// Without initial value, sum of elements
const x = arr.myReduce((ac, cu) => ac + cu);
console.log(x); // Output: 10
