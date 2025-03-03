function minimumTotal(triangle: number[][]): number {
    let result: number = 100000;
    if(triangle.length == 1) return triangle[0][0]
    for(let i = 1; i < triangle.length; i ++) {
        for(let j = 0; j < triangle[i].length; j ++) {
            if(j - 1 < 0) {
                triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
            } else if (j > triangle[i - 1].length - 1) {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
            } else {
                triangle[i][j] = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
            }
            if(i === triangle.length - 1) result = Math.min(result, triangle[i][j])
        }
    }

    return result;
};