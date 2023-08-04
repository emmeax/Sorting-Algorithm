// Problem 1
function findDistinctSum(set1, set2) {
    let distinctSum = 0;

    for (let num of set1) {
        if (!set2.includes(num)) {
            distinctSum += num;
        }
    }

    for (let num of set2) {
        if (!set1.includes(num)) {
            distinctSum += num;
        }
    }

    return distinctSum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const output = findDistinctSum(set1, set2);
console.log("Distinct sum:", output);

//Problem 2
function dotProduct(v1, v2) {
    let product = 0;

    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }

    return product;
}

function areOrthogonal(v1, v2) {
    const dot = dotProduct(v1, v2);
    return dot === 0;
}

// Example usage
const vectors = [
    [1, 0, 0],   // Orthogonal to [0, 1, 0]
    [2, -1, 5],  // Not orthogonal to [-1, 2, 3]
    [0, 1, 0],   // Orthogonal to [1, 0, 0]
    [-1, 2, 3]   // Not orthogonal to [2, -1, 5]
];

for (let i = 0; i < vectors.length; i += 2) {
    const orthogonal = areOrthogonal(vectors[i], vectors[i + 1]);
    console.log(`Vectors ${vectors[i]} and ${vectors[i + 1]} are orthogonal: ${orthogonal}`);
}


