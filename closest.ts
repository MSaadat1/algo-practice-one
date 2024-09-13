export function closest(nums: number[], target: number): number {
   // Implement me
   let closetSums = Infinity;
   for(let i = 0; i < nums.length - 2; i ++){
    for(let j = i + 1; j <nums.length - 1; j++){
      for(let k = j + 1; k < nums.length; k++){
        let sums = nums[i] + nums [j] + nums[k];
        if(Math.abs(sums - target) < (Math.abs(closetSums - target))){
          closetSums = sums
        }
      }
    }
   }
   
   return closetSums;
}

module.exports = { closest }
