function twoSum(nums: number[], target: number): number[] {
    return nums.length < 6 ? simpleSearch(nums, target) : effectiveSearch(nums, target)
};

function effectiveSearch(nums: number[], target:number) {
    const sortedTuples = nums.map((num, index) => {
        return {initialIndex: index, value: num}
    }).sort((a, b) => a.value - b.value)
    for(let index = 0; index < sortedTuples.length; index++) {
        const missingValue = target - sortedTuples[index].value;
        const searchingResult = binarySearch(0, sortedTuples.length - 1, missingValue, sortedTuples, sortedTuples[index].initialIndex)
        if(searchingResult !== -1) {
            return [sortedTuples[index].initialIndex, searchingResult].sort()
        }
    }
}

function simpleSearch(array: number[], value: number) {
    for(let i = 0; i < array.length; i ++) {
        for(let j = i + 1; j < array.length; j ++) {
            if(array[i] + array[j] === value) return [i, j]
        }
    }
    return []
}

interface Tuple {
    value: number,
    initialIndex: number
}


function binarySearch(start:number, end: number, value: number, sortedArray: Tuple[], forbiddenIndex: number): number {
    if (start <= end) {
        const mid = Math.ceil(start + (end - start) / 2);
        if(sortedArray[mid].value == value) {
            if(forbiddenIndex == sortedArray[mid].initialIndex) {
                if(mid - 1 >= 0 && sortedArray[mid - 1].value == value) return sortedArray[mid - 1].initialIndex
                if(mid + 1 <= sortedArray.length - 1 && sortedArray[mid + 1].value == value) return sortedArray[mid + 1].initialIndex

            } else {
                return sortedArray[mid].initialIndex
            }
        }
        
         if(sortedArray[mid].value > value) {
            return binarySearch(start, mid - 1, value, sortedArray, forbiddenIndex)
        }
         if(sortedArray[mid].value < value) {
            return binarySearch(mid + 1, end, value, sortedArray, forbiddenIndex)
        }
    }
    return -1;
}