function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if(mat.length == 0 || r*c !== mat.length * mat[0].length || (mat.length == r && mat[0].length == c)) return mat;
    let newResult = [[-1]]
    newResult[0].pop();
    let rTemp = 0;
    let cTemp = 0;
    for(let i = 0; i < mat?.length; i++) {
        for(let j = 0; j < mat[0].length ; j++) {
            if(cTemp == c) {
                cTemp = 0;
                rTemp++;
                newResult.push([]);
            }
            cTemp++;
            newResult[rTemp].push(mat[i][j]);
        }
    }
    return newResult;
};