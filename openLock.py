def openLock(deadends, target):
    move = deadends
    q = ["0000"]
    cnt = 0
    moved = {str(
        i): [str((i + 1) % 10), str((i - 1) % 10)] for i in range(10)}
    if "0000" in moved:
        return -1
    while q:
        new = []
        cnt += 1
        for s in q:
            for i, c in enumerate(s):
                for cur in (s[:i] + move[c][0] + s[i + 1:], s[:i] + move[c][1] + s[i + 1:]):
                    if cur not in moved:
                        if cur == target:
                            return cnt
                        new.append(cur)
                        moved.add(cur)
        q = new
    return -1


openLock(["0120", "0201", "0120", "1001", "2100"], "2202")
