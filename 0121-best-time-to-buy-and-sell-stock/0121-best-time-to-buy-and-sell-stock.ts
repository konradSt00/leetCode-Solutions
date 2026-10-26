function maxProfit(prices: number[]): number {

    let left = 0, right = 1, minLeft = 0, max = -1;;
    if(prices.length < 2) return 0;
    for(; right < prices.length;) {
      if (prices[right] - prices[minLeft] > max) {
            max = prices[right] - prices[minLeft];
        } if(prices[right] - prices[left] >= max) {
            max = prices[right] - prices[left];
        }
       if(prices[left] < prices[minLeft])
              minLeft =left;
        right++;left++;
    }
    return Math.max(0, max);
};
