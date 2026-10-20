
function findMax(left: number, right: number, heights: number[]): number {
    let max = -1;
    let index = -1;
    for(let i = left + 1;i < right; i++) {
        if(heights[i] > max){
            max = heights[i]
            index = i;
        }
    }
    return index
}

function calculate(left: number, right: number, heights: number[]) {
    let result = 0;
    let boundary = Math.min(heights[left], heights[right])
    for(let i = left + 1; i < right; i ++) {
        result += Math.max((boundary - heights[i]), 0);
    }


    return result;
}

function divideAndCalculate(left: number, right: number, heights: number[]): number {
    if(right - left <= 1) return 0;
    const max = findMax(left, right, heights);
    const lH = heights[left], rH = heights[right], maxH = heights[max];

    if(maxH >= lH && maxH >= rH) return divideAndCalculate(left, max, heights) + divideAndCalculate(max, right, heights);
    else if(maxH <= lH && maxH <= rH) return calculate(left, right, heights);
    else if(maxH < lH) return calculate(left, max, heights) + divideAndCalculate(max, right, heights);
    else if(maxH < rH) return calculate(max, right, heights) + divideAndCalculate(left, max, heights);
}

function findLeftBoundary(heights: number[]): number {
    let prev = 0;
    for(let i = 0 ; i < heights.length; i ++) {
        if(prev > heights[i]) return i - 1;
        prev = heights[i];
    }
    return -1;
}

function findRightBoundary(heights: number[]): number {
    let prev = 0;
    for(let i = heights.length ; i >= 0; i --) {
        if(prev > heights[i]) return i + 1;
        prev = heights[i];
    }
    return -1;
}

function trap(height: number[]): number {
    const leftBoundary = findLeftBoundary(height);
    const rightBoundary = findRightBoundary(height);
    if(leftBoundary == -1 || rightBoundary == -1 || !(leftBoundary < rightBoundary )) return 0;
    return divideAndCalculate(leftBoundary, rightBoundary, height);
};