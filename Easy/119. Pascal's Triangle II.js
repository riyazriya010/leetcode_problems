var getRow = function(rowIndex) {
    let pascalTriangle = []
    if(rowIndex === 0) return [1]
    for(let i = 0; i <= rowIndex; i++){
        pascalTriangle[i] = []

        pascalTriangle[i][0] = 1
        pascalTriangle[i][i] = 1
        for(let j = 1; j < i; j ++){
            pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }
    }
    return pascalTriangle[rowIndex]
}
const rowIndex = 1
console.log(getRow(rowIndex));
