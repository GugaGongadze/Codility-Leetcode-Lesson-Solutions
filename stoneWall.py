def solution(H):
    block_cnt = 0

    stack = []

    for height in H:
        # remove all blocks that are bigger than my height
        while len(stack) != 0 and stack[-1] > height:
            stack.pop()

        if len(stack) != 0 and stack[-1] == height:
            # we already paid for this size
            pass
        else:
            # new block is required, push it's size to the stack
            block_cnt += 1
            stack.append(height)

    return block_cnt


print(solution([2, 5, 1, 4, 6, 7, 9, 10, 1]))
