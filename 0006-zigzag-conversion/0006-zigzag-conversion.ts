const replaceAt = (str: string, index: number, replacement: string) => {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

function getZigzagLength(numRows: number): number {
    if(numRows == 1) return 1;
    if(numRows == 2) return 2;
    return numRows * 2 - 2;
}
function convert(s: string, numRows: number): string {
    const zigzagLength = getZigzagLength(numRows);
    const fullZigzags = Math.floor(s.length / zigzagLength)
    const rest = s.length % zigzagLength;
    let result = " ".repeat(s.length + 2);                                                                                                                                        

    function getSingleZigzagNumberOfLettersByRow(row: number): number {
        if(row == 0 || row == numRows - 1) return 1;
        else return 2;
    }

    function getRestNumberOfLettersByRow(row: number): number {
        if(rest <= numRows) {
            if(rest > row) return 1;
            else return 0;
        } else {
            if(row < (rest % zigzagLength < numRows ? rest % zigzagLength : 2 * numRows - (rest % zigzagLength) - 2 )) return 1;
            else return getSingleZigzagNumberOfLettersByRow(row);
        }
    }
    const numberOfLettersInRows:number[] = []
    let prev = 0;
    for(let i = 0; i<numRows; i ++) {
        const current = getSingleZigzagNumberOfLettersByRow(i) * fullZigzags + getRestNumberOfLettersByRow(i) + prev;
        prev = current;
        numberOfLettersInRows.push(current);
    }

    const getTransitionByRow = (row: number, i: number) => {
        let result;
        if(row === 0) result  = 0;
        else result = numberOfLettersInRows[row - 1]   
        const zigzagIndex = Math.floor(i / zigzagLength);
        const zigzagPositionIndex = i % zigzagLength;
        if(zigzagPositionIndex < numRows) result += ((zigzagPositionIndex == 0 || zigzagPositionIndex == numRows - 1) ? zigzagIndex : zigzagIndex * 2)
        else result += ((zigzagPositionIndex == 0 || zigzagPositionIndex == numRows - 1) ? zigzagIndex : zigzagIndex * 2) + 1
        return result;
        
    }

    for(let i = 0; i < s.length; i++) {
        const row = i % zigzagLength < numRows ? i % zigzagLength : 2 * numRows - (i % zigzagLength) - 2 
        const calculatedIndex = getTransitionByRow(row, i);
        result = replaceAt(result, calculatedIndex, s[i])
    }
    return result.replace(' ', '').trim();
};