def findTargetSumWays(self, nums: List[int], S: int) -> int:
        return self.dp(nums, S)
        # return self.recursiveWithMem(nums, S, 0, {})
        # return self.recursive(nums, S)

    def dp(self, nums, S) -> int:
        max_sum = sum([abs(num) for num in nums])

        if S > max_sum or S < -max_sum:
            return 0

        ways_len = max_sum * 2 + 1
        ways = [[0] * ways_len for _ in range(len(nums))]

        ways[0][nums[0]] = 1
        ways[0][-nums[0]] += 1

        for i in range(1, len(nums)):        
            for s in range(-max_sum, max_sum + 1):
                add_ways = 0
                subtract_ways = 0
                
                if -max_sum <= s - nums[i] <= max_sum:
                    add_ways = ways[i - 1][s - nums[i]]
                
                if -max_sum <= s + nums[i] <= max_sum:
                    subtract_ways = ways[i - 1][s + nums[i]]
                
                ways[i][s] = max(ways[i][s], subtract_ways + add_ways)

        return ways[len(nums)-1][S]

    def recursiveWithMem(self, nums, S, i, mem) -> int:
        if i == len(nums):
            return (1 if S == 0 else 0)

        key = (i, S)
        if key in mem:
            return mem[key]
                                                  
        r = self.recursiveWithMem(nums, S - nums[i], i + 1, mem) + self.recursiveWithMem(nums, S + nums[i], i + 1, mem)
        mem[key] = r
        return r
        
    def recursive(self, nums, S) -> int:
        if len(nums) == 0:
            return (1 if S == 0 else 0)

        return self.recursive(nums[1:], S - nums[0]) + self.recursive(nums[1:], S + nums[0])
