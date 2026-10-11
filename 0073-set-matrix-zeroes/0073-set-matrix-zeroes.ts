/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let zeroPrevious = false, zeroCurrent = false;
    const m = matrix.length, n = matrix[0].length;
    for(let i = 0; i <= m; i ++) {
        for(let j = 0; j < n; j++) {
            if(i < m && matrix[i][j] == 0) {
                zeroCurrent = true;
                for(let k = i; k >= 0; k--) {
                    matrix[k][j] = 0;
                }
            }
            if(i < m && i > 0) {
                if(matrix[i - 1][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
            if(zeroPrevious) {
                matrix[i-1][j] = 0;
            }
        }
        zeroPrevious = zeroCurrent;
        zeroCurrent = false;
    }
};

