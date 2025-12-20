function rotate(matrix: number[][]): void {
    let tmp, tmp2;
    for(let peri = 0; peri < Math.floor(matrix.length/2); peri++) {
        const matrixIndexLowerBound = 0 + peri;
        const matrixIndexUpperBound = matrix.length - 1 - peri;
        for(let i = 0; i <= matrixIndexUpperBound - matrixIndexLowerBound - 1; i ++) {
            tmp = matrix[matrixIndexLowerBound + i][matrixIndexUpperBound] // upperRight
            matrix[matrixIndexLowerBound + i][matrixIndexUpperBound] //upperRight
             = matrix[matrixIndexLowerBound][matrixIndexLowerBound + i] //upperLeft

            tmp2 = matrix[matrixIndexUpperBound][matrixIndexUpperBound - i]; //lowerRight
            matrix[matrixIndexUpperBound][matrixIndexUpperBound - i] = tmp; // lowerRight
            
            tmp = matrix[matrixIndexUpperBound - i][matrixIndexLowerBound]; // lowerLeft
            matrix[matrixIndexUpperBound - i][matrixIndexLowerBound] = tmp2; // lowerLeft

            matrix[matrixIndexLowerBound][matrixIndexLowerBound + i] = tmp; // upperLeft
        }
    }   
};