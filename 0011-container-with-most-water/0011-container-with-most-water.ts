function maxArea(height: number[]): number {
    function calculateArea(i: number, j: number) {
        return Math.min(height[i], height[j]) * (j - i);
    }
    let i = 0, j = height.length - 1;
    let max = 0;
    while(i < j) {
        max = Math.max(max, calculateArea(i, j))
        if(height[i] < height[j]) i++;
        else j--;
    }
    return max;
};