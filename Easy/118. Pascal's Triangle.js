

var generate = function(numRows) {
    let pascalTriangle = []

    for(let i = 0; i < numRows; i++){
        pascalTriangle[i] = [];

        pascalTriangle[i][0] = 1; // first element
        pascalTriangle[i][i] = 1; // last element

        // filling the inner element
        for(let j = 1; j < i; j++){
            pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }
    }

    return pascalTriangle;
};

const numRows = 1
console.log(generate(numRows)); // output: [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]

