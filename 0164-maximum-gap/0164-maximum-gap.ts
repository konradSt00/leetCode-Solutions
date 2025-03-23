const getNumAtPostion = (num: number, posFromEnd: number): number => {
    const numStr = num.toString();
    const position = numStr.length - 1 - posFromEnd;
    if( position < 0) return 0;
    return parseInt(numStr[position])
}



function maximumGap(nums: number[]): number {
    if(nums.length < 2) return 0;

    const sortByPosition = (position: number): number[] => {
        const bucketsList:number[][] = [[],[],[],[],[],[],[],[],[],[]]
        for(let j = 0 ; j < nums.length ; j++) {
            bucketsList[getNumAtPostion(nums[j], position)].push(nums[j])
        }
        const result: number[] = []
        bucketsList.forEach(bucket => bucket.forEach(num => result.push(num)))
        return result
    }

    const findMaxDifference = () => {
        let maxDiff = 0; 
        for(let j = 1 ; j < nums.length ; j++) {
            maxDiff = Math.max(maxDiff, nums[j] - nums[j - 1])
        }
        return maxDiff;
    }

    const maxNumberLength = Math.max(...nums).toString().length;

    for(let i = 0; i < maxNumberLength; i++) {
        nums = sortByPosition(i)
    }

    return findMaxDifference()
};